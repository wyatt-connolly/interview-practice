#!/bin/bash

# DevOps Interview Project Setup Script
# This script sets up the development environment and initializes the project

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to install tool if not present
install_tool() {
    local tool=$1
    local install_cmd=$2
    
    if ! command_exists "$tool"; then
        print_warning "$tool is not installed. Installing..."
        eval "$install_cmd"
        print_success "$tool installed successfully"
    else
        print_success "$tool is already installed"
    fi
}

# Check operating system
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    OS="linux"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    OS="macos"
else
    print_error "Unsupported operating system: $OSTYPE"
    exit 1
fi

print_status "Setting up DevOps Interview Project on $OS..."

# Install required tools
print_status "Checking and installing required tools..."

# Install Homebrew (macOS) or update package manager (Linux)
if [[ "$OS" == "macos" ]]; then
    if ! command_exists brew; then
        print_warning "Homebrew not found. Installing..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    fi
    PACKAGE_MANAGER="brew"
elif [[ "$OS" == "linux" ]]; then
    if command_exists apt-get; then
        PACKAGE_MANAGER="apt"
        sudo apt-get update
    elif command_exists yum; then
        PACKAGE_MANAGER="yum"
    else
        print_error "Unsupported package manager"
        exit 1
    fi
fi

# Install Node.js
if [[ "$OS" == "macos" ]]; then
    install_tool "node" "$PACKAGE_MANAGER install node@18"
elif [[ "$OS" == "linux" ]]; then
    if ! command_exists node; then
        print_warning "Node.js not found. Installing..."
        curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
        sudo apt-get install -y nodejs
    fi
fi

# Install Docker
if [[ "$OS" == "macos" ]]; then
    install_tool "docker" "$PACKAGE_MANAGER install --cask docker"
elif [[ "$OS" == "linux" ]]; then
    if ! command_exists docker; then
        print_warning "Docker not found. Installing..."
        curl -fsSL https://get.docker.com -o get-docker.sh
        sudo sh get-docker.sh
        sudo usermod -aG docker $USER
        rm get-docker.sh
    fi
fi

# Install kubectl
if [[ "$OS" == "macos" ]]; then
    install_tool "kubectl" "$PACKAGE_MANAGER install kubectl"
elif [[ "$OS" == "linux" ]]; then
    if ! command_exists kubectl; then
        print_warning "kubectl not found. Installing..."
        curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
        sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
        rm kubectl
    fi
fi

# Install AWS CLI
if [[ "$OS" == "macos" ]]; then
    install_tool "aws" "$PACKAGE_MANAGER install awscli"
elif [[ "$OS" == "linux" ]]; then
    if ! command_exists aws; then
        print_warning "AWS CLI not found. Installing..."
        curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
        unzip awscliv2.zip
        sudo ./aws/install
        rm -rf aws awscliv2.zip
    fi
fi

# Install Terraform
if [[ "$OS" == "macos" ]]; then
    install_tool "terraform" "$PACKAGE_MANAGER install terraform"
elif [[ "$OS" == "linux" ]]; then
    if ! command_exists terraform; then
        print_warning "Terraform not found. Installing..."
        wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
        echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
        sudo apt-get update && sudo apt-get install terraform
    fi
fi

# Install Helm
if [[ "$OS" == "macos" ]]; then
    install_tool "helm" "$PACKAGE_MANAGER install helm"
elif [[ "$OS" == "linux" ]]; then
    if ! command_exists helm; then
        print_warning "Helm not found. Installing..."
        curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null
        echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
        sudo apt-get update && sudo apt-get install helm
    fi
fi

# Install Kustomize
if [[ "$OS" == "macos" ]]; then
    install_tool "kustomize" "$PACKAGE_MANAGER install kustomize"
elif [[ "$OS" == "linux" ]]; then
    if ! command_exists kustomize; then
        print_warning "Kustomize not found. Installing..."
        curl -s "https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/hack/install_kustomize.sh" | bash
        sudo mv kustomize /usr/local/bin/
    fi
fi

# Install project dependencies
print_status "Installing project dependencies..."

# Frontend dependencies
if [ -d "frontend" ]; then
    print_status "Installing frontend dependencies..."
    cd frontend
    npm install
    cd ..
fi

# Backend dependencies
if [ -d "backend" ]; then
    print_status "Installing backend dependencies..."
    cd backend
    npm install
    cd ..
fi

# Create necessary directories
print_status "Creating necessary directories..."
mkdir -p logs
mkdir -p backend/logs

# Set up environment files
print_status "Setting up environment files..."

# Create .env files if they don't exist
if [ ! -f "backend/.env" ]; then
    cat > backend/.env << EOF
# Backend Environment Variables
NODE_ENV=development
PORT=8080
LOG_LEVEL=debug

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=devopsinterview
DB_USERNAME=admin
DB_PASSWORD=adminpassword
DB_SSL=false

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0

# JWT Configuration
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h
JWT_REFRESH_EXPIRES_IN=7d

# Security
BCRYPT_ROUNDS=12
SESSION_SECRET=your-session-secret

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100

# CORS
CORS_ORIGIN=http://localhost:3000
CORS_CREDENTIALS=true

# Logging
LOG_FILE_ENABLED=true
LOG_FILE_NAME=logs/app.log
LOG_FILE_MAX_SIZE=10m
LOG_FILE_MAX_FILES=5

# Monitoring
PROMETHEUS_ENABLED=true
PROMETHEUS_PORT=9090

# AWS Configuration
AWS_REGION=us-west-2
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
EOF
    print_success "Created backend/.env file"
fi

# Create .env.local for frontend if it doesn't exist
if [ ! -f "frontend/.env.local" ]; then
    cat > frontend/.env.local << EOF
# Frontend Environment Variables
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_ENVIRONMENT=development
NEXT_TELEMETRY_DISABLED=1
EOF
    print_success "Created frontend/.env.local file"
fi

# Initialize Terraform
print_status "Initializing Terraform..."
cd infrastructure/environments/dev
terraform init
cd ../../..

# Create kustomization.yaml
print_status "Setting up Kubernetes manifests..."
cd k8s
if [ ! -f "kustomization.yaml" ]; then
    cat > kustomization.yaml << EOF
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

namespace: devops-interview

resources:
- namespace.yaml
- configmap.yaml
- secrets.yaml
- backend-deployment.yaml
- frontend-deployment.yaml
- services.yaml
- ingress.yaml
- hpa.yaml

images:
- name: devops-interview-backend
  newTag: latest
- name: devops-interview-frontend
  newTag: latest
EOF
    print_success "Created kustomization.yaml"
fi
cd ..

# Set up Git hooks
print_status "Setting up Git hooks..."
if [ -d ".git" ]; then
    mkdir -p .git/hooks
    cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
# Pre-commit hook to run linting and tests

echo "Running pre-commit checks..."

# Frontend checks
if [ -d "frontend" ]; then
    echo "Checking frontend..."
    cd frontend
    npm run lint
    npm run test
    cd ..
fi

# Backend checks
if [ -d "backend" ]; then
    echo "Checking backend..."
    cd backend
    npm run lint
    npm run test
    cd ..
fi

echo "Pre-commit checks passed!"
EOF
    chmod +x .git/hooks/pre-commit
    print_success "Created pre-commit hook"
fi

# Print completion message
print_success "Setup completed successfully!"
echo ""
print_status "Next steps:"
echo "1. Configure AWS credentials: aws configure"
echo "2. Update environment variables in backend/.env and frontend/.env.local"
echo "3. Start the backend: cd backend && npm run dev"
echo "4. Start the frontend: cd frontend && npm run dev"
echo "5. Deploy infrastructure: cd infrastructure/environments/dev && terraform apply"
echo "6. Deploy to Kubernetes: kubectl apply -k k8s/"
echo ""
print_status "For more information, see the README.md file"
