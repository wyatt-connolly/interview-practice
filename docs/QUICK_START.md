# Quick Start Guide

## 🚀 Get Started in 10 Minutes

This guide will help you get the DevOps Interview Project up and running quickly for your interview preparation.

## Prerequisites

Before you start, make sure you have:

- [Git](https://git-scm.com/) installed
- [Docker](https://www.docker.com/) installed and running
- [Node.js 18+](https://nodejs.org/) installed
- [AWS CLI](https://aws.amazon.com/cli/) configured (optional for full deployment)

## Step 1: Clone and Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd interview-practice

# Run the setup script
./scripts/setup.sh
```

The setup script will:

- Install required tools (Terraform, kubectl, etc.)
- Install project dependencies
- Create environment files
- Initialize Terraform
- Set up Git hooks

## Step 2: Start Applications Locally

### Backend API

```bash
cd backend
npm install
npm run dev
```

The backend will be available at: http://localhost:8080

### Frontend Application

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at: http://localhost:3000

## Step 3: Test the Applications

### Backend Health Check

```bash
curl http://localhost:8080/health
```

### Frontend Health Check

```bash
curl http://localhost:3000/health
```

### API Endpoints

```bash
# Get API info
curl http://localhost:8080/api

# Get users
curl http://localhost:8080/api/users

# Get posts
curl http://localhost:8080/api/posts
```

## Step 4: Build Docker Images

### Backend Image

```bash
cd backend
docker build -t devops-interview-backend:latest .
```

### Frontend Image

```bash
cd frontend
docker build -t devops-interview-frontend:latest .
```

## Step 5: Deploy to Kubernetes (Optional)

If you have a Kubernetes cluster:

```bash
# Apply Kubernetes manifests
kubectl apply -k k8s/

# Check deployment status
kubectl get pods -n devops-interview
kubectl get services -n devops-interview
```

## Step 6: Deploy Infrastructure (Optional)

If you have AWS credentials configured:

```bash
cd infrastructure/environments/dev

# Initialize Terraform
terraform init

# Plan the deployment
terraform plan

# Apply the infrastructure
terraform apply
```

## 🎯 Interview Preparation Checklist

### Before Your Interview

- [ ] **Understand the Architecture**

  - Review the system diagram in `docs/INTERVIEW_PREP.md`
  - Know what each component does
  - Understand the data flow

- [ ] **Practice Explaining Components**

  - Terraform modules and their purpose
  - Kubernetes manifests and deployment strategy
  - CI/CD pipeline stages
  - Security measures implemented

- [ ] **Prepare for Common Questions**

  - Why did you choose these technologies?
  - How would you scale this system?
  - What would you change or improve?
  - How do you handle failures and rollbacks?

- [ ] **Know Your Code**
  - Be able to walk through the Terraform configuration
  - Explain the Kubernetes deployment strategy
  - Discuss the CI/CD pipeline implementation
  - Show understanding of security best practices

### Key Talking Points

1. **Infrastructure as Code**

   - Modular Terraform design
   - Environment-specific configurations
   - State management strategy
   - Security and compliance

2. **Container Orchestration**

   - Kubernetes deployment patterns
   - Auto-scaling configuration
   - Health checks and monitoring
   - Resource management

3. **CI/CD Pipeline**

   - Automated testing and security scanning
   - Multi-stage deployment process
   - Rollback strategies
   - Environment promotion

4. **Monitoring and Observability**

   - Prometheus metrics collection
   - Health check implementation
   - Logging strategy
   - Alerting configuration

5. **Security**
   - Network security (VPC, security groups)
   - Application security (non-root containers, secrets)
   - Data encryption (at rest and in transit)
   - Access control (IAM, RBAC)

## 🔧 Quick Commands Reference

### Development

```bash
# Start backend
cd backend && npm run dev

# Start frontend
cd frontend && npm run dev

# Run tests
npm test

# Run linting
npm run lint
```

### Docker

```bash
# Build images
docker build -t devops-interview-backend:latest backend/
docker build -t devops-interview-frontend:latest frontend/

# Run containers
docker run -p 8080:8080 devops-interview-backend:latest
docker run -p 3000:3000 devops-interview-frontend:latest
```

### Kubernetes

```bash
# Deploy
kubectl apply -k k8s/

# Check status
kubectl get all -n devops-interview

# View logs
kubectl logs -f deployment/backend-api -n devops-interview
kubectl logs -f deployment/frontend-app -n devops-interview

# Port forward for local access
kubectl port-forward svc/backend-service 8080:8080 -n devops-interview
kubectl port-forward svc/frontend-service 3000:3000 -n devops-interview
```

### Terraform

```bash
# Initialize
cd infrastructure/environments/dev
terraform init

# Plan
terraform plan

# Apply
terraform apply

# Destroy (cleanup)
terraform destroy
```

## 🚨 Troubleshooting

### Common Issues

1. **Port already in use**

   ```bash
   # Find process using port
   lsof -i :8080
   lsof -i :3000

   # Kill process
   kill -9 <PID>
   ```

2. **Docker build fails**

   ```bash
   # Clean Docker cache
   docker system prune -a

   # Rebuild without cache
   docker build --no-cache -t devops-interview-backend:latest backend/
   ```

3. **Kubernetes pods not starting**

   ```bash
   # Check pod events
   kubectl describe pod <pod-name> -n devops-interview

   # Check pod logs
   kubectl logs <pod-name> -n devops-interview
   ```

4. **Terraform errors**

   ```bash
   # Validate configuration
   terraform validate

   # Check state
   terraform show
   ```

## 📚 Next Steps

1. **Read the Documentation**

   - Review `docs/INTERVIEW_PREP.md` for detailed explanations
   - Study the architecture and design decisions

2. **Practice Scenarios**

   - Try scaling the application
   - Simulate failures and practice recovery
   - Test the monitoring and alerting

3. **Customize the Project**

   - Add new features to demonstrate your skills
   - Implement additional security measures
   - Optimize for cost and performance

4. **Prepare Your Demo**
   - Have a clear demo script ready
   - Practice explaining each component
   - Be ready to answer questions about your decisions

## 🎯 Success Tips

- **Know your project inside out** - Be able to explain every file and configuration
- **Understand the trade-offs** - Why you chose certain technologies over others
- **Be ready to troubleshoot** - Practice debugging common issues
- **Show business value** - Connect technical decisions to business outcomes
- **Demonstrate continuous learning** - Show you stay updated with latest trends

Good luck with your interview! 🚀
