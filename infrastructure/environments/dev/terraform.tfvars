# Terraform variables for development environment

aws_region = "us-west-2"
environment = "dev"
project_name = "devops-interview"

# VPC Configuration
vpc_cidr = "10.0.0.0/16"
public_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
private_subnets = ["10.0.11.0/24", "10.0.12.0/24", "10.0.13.0/24"]

# Database Configuration
db_name = "devopsinterview"
db_username = "admin"
db_password = "DevOpsInterview2024!"  # Change this in production

# EKS Configuration
eks_cluster_version = "1.28"
eks_node_group_instance_types = ["t3.medium", "t3.small"]
eks_node_group_desired_size = 2
eks_node_group_max_size = 4
eks_node_group_min_size = 1

# RDS Configuration
rds_instance_class = "db.t3.micro"
rds_allocated_storage = 20

# Redis Configuration
redis_node_type = "cache.t3.micro"
redis_num_cache_nodes = 1
