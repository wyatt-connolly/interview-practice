"use client";

import { useState, useEffect } from "react";
import {
  CloudIcon,
  ServerIcon,
  CogIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  MinusIcon,
  BoltIcon,
  CpuChipIcon,
  CircleStackIcon,
  AcademicCapIcon,
  BookOpenIcon,
  LightBulbIcon,
  CodeBracketIcon,
  CommandLineIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

interface SystemStatus {
  name: string;
  status: "healthy" | "warning" | "error";
  uptime: string;
  responseTime: number;
  icon: React.ReactNode;
}

interface Metric {
  name: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
}

export default function HomePage() {
  const [systemStatus, setSystemStatus] = useState<SystemStatus[]>([
    {
      name: "Frontend (Next.js)",
      status: "healthy",
      uptime: "99.9%",
      responseTime: 45,
      icon: (
        <BoltIcon style={{ height: "20px", width: "20px", color: "#3b82f6" }} />
      ),
    },
    {
      name: "Backend API (Node.js)",
      status: "healthy",
      uptime: "99.8%",
      responseTime: 120,
      icon: (
        <ServerIcon
          style={{ height: "20px", width: "20px", color: "#10b981" }}
        />
      ),
    },
    {
      name: "Database (PostgreSQL)",
      status: "healthy",
      uptime: "99.9%",
      responseTime: 15,
      icon: (
        <CircleStackIcon
          style={{ height: "20px", width: "20px", color: "#8b5cf6" }}
        />
      ),
    },
    {
      name: "Cache (Redis)",
      status: "warning",
      uptime: "98.5%",
      responseTime: 5,
      icon: (
        <CpuChipIcon
          style={{ height: "20px", width: "20px", color: "#f97316" }}
        />
      ),
    },
  ]);

  const [metrics, setMetrics] = useState<Metric[]>([
    {
      name: "Total Requests",
      value: "1.2M",
      change: "+12.5%",
      changeType: "positive",
      icon: (
        <ChartBarIcon
          style={{ height: "16px", width: "16px", color: "#3b82f6" }}
        />
      ),
    },
    {
      name: "Average Response Time",
      value: "145ms",
      change: "-8.2%",
      changeType: "positive",
      icon: (
        <ClockIcon
          style={{ height: "16px", width: "16px", color: "#10b981" }}
        />
      ),
    },
    {
      name: "Error Rate",
      value: "0.02%",
      change: "-15.3%",
      changeType: "positive",
      icon: (
        <ShieldCheckIcon
          style={{ height: "16px", width: "16px", color: "#8b5cf6" }}
        />
      ),
    },
    {
      name: "Active Users",
      value: "2.4K",
      change: "+5.7%",
      changeType: "positive",
      icon: (
        <CloudIcon
          style={{ height: "16px", width: "16px", color: "#f97316" }}
        />
      ),
    },
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "healthy":
        return (
          <CheckCircleIcon
            style={{ height: "20px", width: "20px", color: "#10b981" }}
          />
        );
      case "warning":
        return (
          <ExclamationTriangleIcon
            style={{ height: "20px", width: "20px", color: "#f59e0b" }}
          />
        );
      case "error":
        return (
          <ExclamationTriangleIcon
            style={{ height: "20px", width: "20px", color: "#ef4444" }}
          />
        );
      default:
        return (
          <ClockIcon
            style={{ height: "20px", width: "20px", color: "#6b7280" }}
          />
        );
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "healthy":
        return {
          backgroundColor: "#dcfce7",
          color: "#166534",
          border: "1px solid #bbf7d0",
        };
      case "warning":
        return {
          backgroundColor: "#fef3c7",
          color: "#92400e",
          border: "1px solid #fde68a",
        };
      case "error":
        return {
          backgroundColor: "#fee2e2",
          color: "#991b1b",
          border: "1px solid #fecaca",
        };
      default:
        return {
          backgroundColor: "#f3f4f6",
          color: "#374151",
          border: "1px solid #d1d5db",
        };
    }
  };

  const getChangeIcon = (changeType: string) => {
    switch (changeType) {
      case "positive":
        return (
          <ArrowTrendingUpIcon
            style={{ height: "16px", width: "16px", color: "#10b981" }}
          />
        );
      case "negative":
        return (
          <ArrowTrendingDownIcon
            style={{ height: "16px", width: "16px", color: "#ef4444" }}
          />
        );
      default:
        return (
          <MinusIcon
            style={{ height: "16px", width: "16px", color: "#6b7280" }}
          />
        );
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {/* Hero Section */}
      <div style={{ textAlign: "center", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #3b82f6, #8b5cf6, #6366f1)",
            opacity: 0.05,
            borderRadius: "24px",
            zIndex: -1,
          }}
        ></div>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            background: "linear-gradient(to right, #111827, #1e40af, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "24px",
          }}
        >
          DevOps Interview Project
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "#6b7280",
            maxWidth: "768px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          A comprehensive demonstration of modern DevOps practices including
          Infrastructure as Code, containerization, CI/CD pipelines, and
          monitoring. Perfect for learning and interview preparation.
        </p>
        <div
          style={{
            marginTop: "32px",
            display: "flex",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 16px",
              backgroundColor: "#dbeafe",
              color: "#1d4ed8",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            <CloudIcon
              style={{ height: "12px", width: "12px", marginRight: "8px" }}
            />
            AWS Cloud
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 16px",
              backgroundColor: "#dcfce7",
              color: "#166534",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            <CogIcon
              style={{ height: "12px", width: "12px", marginRight: "8px" }}
            />
            Terraform
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 16px",
              backgroundColor: "#f3e8ff",
              color: "#7c3aed",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            <ServerIcon
              style={{ height: "12px", width: "12px", marginRight: "8px" }}
            />
            Kubernetes
          </div>
        </div>
      </div>

      {/* Interview Preparation Section */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb",
          padding: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "#111827",
            marginBottom: "32px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <AcademicCapIcon
            style={{ height: "32px", width: "32px", color: "#3b82f6" }}
          />
          DevOps Interview Preparation
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            style={{
              padding: "20px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f8fafc",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <BookOpenIcon
                style={{ height: "20px", width: "20px", color: "#3b82f6" }}
              />
              Key Concepts to Master
            </h3>
            <ul
              style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}
            >
              <li style={{ marginBottom: "8px" }}>
                • <strong>Infrastructure as Code:</strong> Terraform,
                CloudFormation
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Containerization:</strong> Docker, Kubernetes
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>CI/CD:</strong> GitHub Actions, Jenkins, GitLab CI
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Monitoring:</strong> Prometheus, Grafana, ELK Stack
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Security:</strong> IAM, Secrets Management, Network
                Security
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Cloud Services:</strong> AWS, Azure, GCP
              </li>
            </ul>
          </div>
          <div
            style={{
              padding: "20px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f8fafc",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <LightBulbIcon
                style={{ height: "20px", width: "20px", color: "#10b981" }}
              />
              Common Interview Questions
            </h3>
            <ul
              style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}
            >
              <li style={{ marginBottom: "8px" }}>
                • "How would you design a highly available system?"
              </li>
              <li style={{ marginBottom: "8px" }}>
                • "Explain the difference between Docker and Kubernetes"
              </li>
              <li style={{ marginBottom: "8px" }}>
                • "How do you handle secrets in a CI/CD pipeline?"
              </li>
              <li style={{ marginBottom: "8px" }}>
                • "What's your approach to infrastructure scaling?"
              </li>
              <li style={{ marginBottom: "8px" }}>
                • "How do you monitor application performance?"
              </li>
              <li style={{ marginBottom: "8px" }}>
                • "Describe your disaster recovery strategy"
              </li>
            </ul>
          </div>
          <div
            style={{
              padding: "20px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f8fafc",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CodeBracketIcon
                style={{ height: "20px", width: "20px", color: "#8b5cf6" }}
              />
              Technical Skills to Demonstrate
            </h3>
            <ul
              style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}
            >
              <li style={{ marginBottom: "8px" }}>
                • <strong>Scripting:</strong> Bash, Python, PowerShell
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Version Control:</strong> Git, GitFlow
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Networking:</strong> VPC, Load Balancers, DNS
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Databases:</strong> RDS, NoSQL, Caching
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Automation:</strong> Ansible, Chef, Puppet
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Logging:</strong> Centralized logging, log analysis
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb",
          padding: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "#111827",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          Technology Stack
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
              padding: "24px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            <CloudIcon
              style={{
                height: "32px",
                width: "32px",
                color: "#2563eb",
                marginBottom: "16px",
              }}
            />
            <h3
              style={{
                fontWeight: "bold",
                color: "#111827",
                fontSize: "18px",
                marginBottom: "8px",
              }}
            >
              AWS Cloud
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "12px",
              }}
            >
              EKS, RDS, ElastiCache
            </p>
            <div style={{ fontSize: "12px", color: "#374151" }}>
              <strong>Interview Tip:</strong> Know the difference between EC2,
              ECS, and EKS. Understand VPC networking and security groups.
            </div>
          </div>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #dcfce7, #bbf7d0)",
              padding: "24px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            <CogIcon
              style={{
                height: "32px",
                width: "32px",
                color: "#16a34a",
                marginBottom: "16px",
              }}
            />
            <h3
              style={{
                fontWeight: "bold",
                color: "#111827",
                fontSize: "18px",
                marginBottom: "8px",
              }}
            >
              Terraform
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "12px",
              }}
            >
              Infrastructure as Code
            </p>
            <div style={{ fontSize: "12px", color: "#374151" }}>
              <strong>Interview Tip:</strong> Understand state management,
              modules, and the difference between Terraform and CloudFormation.
            </div>
          </div>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #f3e8ff, #e9d5ff)",
              padding: "24px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            <ServerIcon
              style={{
                height: "32px",
                width: "32px",
                color: "#9333ea",
                marginBottom: "16px",
              }}
            />
            <h3
              style={{
                fontWeight: "bold",
                color: "#111827",
                fontSize: "18px",
                marginBottom: "8px",
              }}
            >
              Kubernetes
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "12px",
              }}
            >
              Container Orchestration
            </p>
            <div style={{ fontSize: "12px", color: "#374151" }}>
              <strong>Interview Tip:</strong> Know pods, services, deployments,
              and ingress. Understand the difference between Docker and K8s.
            </div>
          </div>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #fed7aa, #fdba74)",
              padding: "24px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            <ShieldCheckIcon
              style={{
                height: "32px",
                width: "32px",
                color: "#ea580c",
                marginBottom: "16px",
              }}
            />
            <h3
              style={{
                fontWeight: "bold",
                color: "#111827",
                fontSize: "18px",
                marginBottom: "8px",
              }}
            >
              Security
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "12px",
              }}
            >
              IAM, Secrets Manager
            </p>
            <div style={{ fontSize: "12px", color: "#374151" }}>
              <strong>Interview Tip:</strong> Understand the principle of least
              privilege, secrets management, and network security best
              practices.
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb",
          padding: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "#111827",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          System Status
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {systemStatus.map((system, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                padding: "24px",
                background: "linear-gradient(135deg, white, #f9fafb)",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  {system.icon}
                  <h3
                    style={{
                      fontWeight: "bold",
                      color: "#111827",
                      fontSize: "18px",
                    }}
                  >
                    {system.name}
                  </h3>
                </div>
                {getStatusIcon(system.status)}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#6b7280", fontWeight: "500" }}>
                    Status:
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      fontSize: "14px",
                      fontWeight: "500",
                      ...getStatusStyle(system.status),
                    }}
                  >
                    {system.status.charAt(0).toUpperCase() +
                      system.status.slice(1)}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#6b7280", fontWeight: "500" }}>
                    Uptime:
                  </span>
                  <span style={{ fontWeight: "bold", color: "#111827" }}>
                    {system.uptime}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#6b7280", fontWeight: "500" }}>
                    Response Time:
                  </span>
                  <span style={{ fontWeight: "bold", color: "#111827" }}>
                    {system.responseTime}ms
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics Dashboard */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb",
          padding: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "#111827",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          Performance Metrics
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
          }}
        >
          {metrics.map((metric, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "12px",
                background: "linear-gradient(135deg, white, #f9fafb)",
                padding: "24px",
                border: "1px solid #e5e7eb",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                {metric.icon}
                {getChangeIcon(metric.changeType)}
              </div>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#111827",
                  marginBottom: "8px",
                }}
              >
                {metric.value}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  marginBottom: "12px",
                  fontWeight: "500",
                }}
              >
                {metric.name}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  color:
                    metric.changeType === "positive"
                      ? "#10b981"
                      : metric.changeType === "negative"
                      ? "#ef4444"
                      : "#6b7280",
                }}
              >
                {metric.change} from last week
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Resources */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb",
          padding: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "#111827",
            marginBottom: "32px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <GlobeAltIcon
            style={{ height: "32px", width: "32px", color: "#3b82f6" }}
          />
          Learning Resources
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            style={{
              padding: "20px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f8fafc",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              📚 Documentation & Courses
            </h3>
            <ul
              style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}
            >
              <li style={{ marginBottom: "8px" }}>
                • <strong>AWS:</strong> AWS Well-Architected Framework
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Terraform:</strong> HashiCorp Learn Platform
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Kubernetes:</strong> Official K8s Documentation
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Docker:</strong> Docker Official Tutorials
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>CI/CD:</strong> GitHub Actions Documentation
              </li>
            </ul>
          </div>
          <div
            style={{
              padding: "20px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f8fafc",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              🎯 Practice Projects
            </h3>
            <ul
              style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}
            >
              <li style={{ marginBottom: "8px" }}>
                • <strong>Infrastructure:</strong> Deploy a web app with
                Terraform
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Containers:</strong> Containerize a multi-service app
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Kubernetes:</strong> Deploy to local cluster
                (kind/minikube)
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Monitoring:</strong> Set up Prometheus + Grafana
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>CI/CD:</strong> Build automated deployment pipeline
              </li>
            </ul>
          </div>
          <div
            style={{
              padding: "20px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f8fafc",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              💡 Interview Preparation
            </h3>
            <ul
              style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}
            >
              <li style={{ marginBottom: "8px" }}>
                • <strong>System Design:</strong> Practice designing scalable
                systems
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Troubleshooting:</strong> Debug common infrastructure
                issues
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Security:</strong> Understand security best practices
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Cost Optimization:</strong> Learn AWS cost management
              </li>
              <li style={{ marginBottom: "8px" }}>
                • <strong>Networking:</strong> Master VPC and networking
                concepts
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb",
          padding: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "#111827",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          Key Features
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "32px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "#dbeafe",
                  borderRadius: "8px",
                }}
              >
                <CogIcon
                  style={{ height: "24px", width: "24px", color: "#2563eb" }}
                />
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#111827",
                }}
              >
                Infrastructure as Code
              </h3>
            </div>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "14px",
                color: "#6b7280",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#3b82f6",
                    borderRadius: "50%",
                    marginTop: "8px",
                    flexShrink: 0,
                  }}
                ></div>
                <span>Terraform modules for AWS resources</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#3b82f6",
                    borderRadius: "50%",
                    marginTop: "8px",
                    flexShrink: 0,
                  }}
                ></div>
                <span>VPC with public and private subnets</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#3b82f6",
                    borderRadius: "50%",
                    marginTop: "8px",
                    flexShrink: 0,
                  }}
                ></div>
                <span>EKS cluster with auto-scaling</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#3b82f6",
                    borderRadius: "50%",
                    marginTop: "8px",
                    flexShrink: 0,
                  }}
                ></div>
                <span>RDS PostgreSQL with encryption</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#3b82f6",
                    borderRadius: "50%",
                    marginTop: "8px",
                    flexShrink: 0,
                  }}
                ></div>
                <span>Redis ElastiCache for caching</span>
              </li>
            </ul>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "#dcfce7",
                  borderRadius: "8px",
                }}
              >
                <ServerIcon
                  style={{ height: "24px", width: "24px", color: "#16a34a" }}
                />
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#111827",
                }}
              >
                DevOps Practices
              </h3>
            </div>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "14px",
                color: "#6b7280",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#10b981",
                    borderRadius: "50%",
                    marginTop: "8px",
                    flexShrink: 0,
                  }}
                ></div>
                <span>Containerized applications with Docker</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#10b981",
                    borderRadius: "50%",
                    marginTop: "8px",
                    flexShrink: 0,
                  }}
                ></div>
                <span>Kubernetes deployment manifests</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#10b981",
                    borderRadius: "50%",
                    marginTop: "8px",
                    flexShrink: 0,
                  }}
                ></div>
                <span>CI/CD pipelines with GitHub Actions</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#10b981",
                    borderRadius: "50%",
                    marginTop: "8px",
                    flexShrink: 0,
                  }}
                ></div>
                <span>Monitoring with Prometheus & Grafana</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#10b981",
                    borderRadius: "50%",
                    marginTop: "8px",
                    flexShrink: 0,
                  }}
                ></div>
                <span>Security best practices implementation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
