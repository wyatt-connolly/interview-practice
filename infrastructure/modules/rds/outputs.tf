output "db_instance_id" {
  description = "RDS instance ID"
  value       = aws_db_instance.main.id
}

output "db_endpoint" {
  description = "RDS instance endpoint"
  value       = aws_db_instance.main.endpoint
}

output "db_port" {
  description = "RDS instance port"
  value       = aws_db_instance.main.port
}

output "db_name" {
  description = "Database name"
  value       = aws_db_instance.main.db_name
}

output "db_username" {
  description = "Database username"
  value       = aws_db_instance.main.username
}

output "db_secret_arn" {
  description = "AWS Secrets Manager secret ARN for database credentials"
  value       = aws_secretsmanager_secret.db_secret.arn
}

output "db_subnet_group_name" {
  description = "RDS subnet group name"
  value       = aws_db_subnet_group.main.name
}

output "db_parameter_group_name" {
  description = "RDS parameter group name"
  value       = aws_db_parameter_group.main.name
}

output "db_option_group_name" {
  description = "RDS option group name"
  value       = aws_db_option_group.main.name
}

output "monitoring_role_arn" {
  description = "RDS monitoring IAM role ARN"
  value       = aws_iam_role.rds_monitoring.arn
}

output "cloudwatch_log_group_name" {
  description = "CloudWatch log group name for RDS logs"
  value       = aws_cloudwatch_log_group.rds_logs.name
}
