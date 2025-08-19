output "redis_replication_group_id" {
  description = "Redis replication group ID"
  value       = aws_elasticache_replication_group.main.id
}

output "redis_endpoint" {
  description = "Redis primary endpoint"
  value       = aws_elasticache_replication_group.main.primary_endpoint_address
}

output "redis_port" {
  description = "Redis port"
  value       = aws_elasticache_replication_group.main.port
}

output "redis_auth_token" {
  description = "Redis authentication token"
  value       = random_password.redis_auth_token.result
  sensitive   = true
}

output "redis_secret_arn" {
  description = "AWS Secrets Manager secret ARN for Redis credentials"
  value       = aws_secretsmanager_secret.redis_secret.arn
}

output "redis_subnet_group_name" {
  description = "Redis subnet group name"
  value       = aws_elasticache_subnet_group.main.name
}

output "redis_parameter_group_name" {
  description = "Redis parameter group name"
  value       = aws_elasticache_parameter_group.main.name
}

output "redis_node_type" {
  description = "Redis node type"
  value       = aws_elasticache_replication_group.main.node_type
}

output "redis_automatic_failover_enabled" {
  description = "Whether automatic failover is enabled"
  value       = aws_elasticache_replication_group.main.automatic_failover_enabled
}
