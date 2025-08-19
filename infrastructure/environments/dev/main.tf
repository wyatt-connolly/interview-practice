# Main Terraform configuration for development environment
terraform {
  required_version = ">= 1.0"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "~> 2.0"
    }
  }

  # Remote backend configuration for state management
  # Uncomment when S3 bucket is created
  # backend "s3" {
  #   bucket         = "devops-interview-terraform-state"
  #   key            = "dev/terraform.tfstate"
  #   region         = "us-west-2"
  #   encrypt        = true
  #   dynamodb_table = "terraform-state-lock"
  # }
}

# AWS Provider configuration
provider "aws" {
  region = var.aws_region
  
  default_tags {
    tags = {
      Environment = var.environment
      Project     = var.project_name
      ManagedBy   = "Terraform"
      Owner       = "DevOps Team"
    }
  }
}

# Data sources for existing resources
data "aws_availability_zones" "available" {
  state = "available"
}

data "aws_caller_identity" "current" {}

# VPC Module
module "vpc" {
  source = "../../modules/vpc"
  
  environment         = var.environment
  project_name        = var.project_name
  vpc_cidr           = var.vpc_cidr
  availability_zones = data.aws_availability_zones.available.names
  public_subnets     = var.public_subnets
  private_subnets    = var.private_subnets
}

# EKS Cluster Module
module "eks" {
  source = "../../modules/eks"
  
  environment      = var.environment
  project_name     = var.project_name
  cluster_name     = "${var.project_name}-${var.environment}"
  vpc_id          = module.vpc.vpc_id
  private_subnets = module.vpc.private_subnet_ids
  public_subnets  = module.vpc.public_subnet_ids
  eks_security_group_id = module.vpc.eks_security_group_id
  
  depends_on = [module.vpc]
}

# RDS Database Module
module "rds" {
  source = "../../modules/rds"
  
  environment     = var.environment
  project_name    = var.project_name
  vpc_id         = module.vpc.vpc_id
  private_subnets = module.vpc.private_subnet_ids
  db_name        = var.db_name
  db_username    = var.db_username
  rds_security_group_id = module.vpc.rds_security_group_id
  
  depends_on = [module.vpc]
}

# Application Load Balancer Module
module "alb" {
  source = "../../modules/alb"
  
  environment     = var.environment
  project_name    = var.project_name
  vpc_id         = module.vpc.vpc_id
  public_subnets = module.vpc.public_subnet_ids
  alb_security_group_id = module.vpc.alb_security_group_id
  
  depends_on = [module.vpc]
}

# Redis ElastiCache Module
module "redis" {
  source = "../../modules/redis"
  
  environment     = var.environment
  project_name    = var.project_name
  private_subnets = module.vpc.private_subnet_ids
  redis_security_group_id = module.vpc.redis_security_group_id
  
  depends_on = [module.vpc]
}

# Outputs
output "vpc_id" {
  description = "VPC ID"
  value       = module.vpc.vpc_id
}

output "eks_cluster_endpoint" {
  description = "EKS cluster endpoint"
  value       = module.eks.cluster_endpoint
}

output "rds_endpoint" {
  description = "RDS database endpoint"
  value       = module.rds.db_endpoint
}

output "alb_dns_name" {
  description = "Application Load Balancer DNS name"
  value       = module.alb.alb_dns_name
}

output "redis_endpoint" {
  description = "Redis ElastiCache endpoint"
  value       = module.redis.redis_endpoint
}
