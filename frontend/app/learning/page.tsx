"use client";

import {
  AcademicCapIcon,
  BookOpenIcon,
  LightBulbIcon,
  CodeBracketIcon,
  CommandLineIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

interface LearningPath {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  topics: string[];
  resources: {
    name: string;
    url: string;
    type: "Documentation" | "Course" | "Practice";
  }[];
  completed: boolean;
}

export default function LearningPage() {
  const learningPaths: LearningPath[] = [
    {
      id: "fundamentals",
      title: "DevOps Fundamentals",
      description: "Core concepts and principles of DevOps practices",
      duration: "2-3 weeks",
      difficulty: "Beginner",
      topics: [
        "What is DevOps?",
        "CI/CD Pipeline Basics",
        "Infrastructure as Code (IaC)",
        "Containerization Fundamentals",
        "Monitoring and Observability",
        "Security in DevOps",
      ],
      resources: [
        {
          name: "AWS DevOps Fundamentals",
          url: "https://aws.amazon.com/devops/",
          type: "Documentation",
        },
        {
          name: "DevOps Roadmap",
          url: "https://roadmap.sh/devops",
          type: "Course",
        },
        {
          name: "DevOps Practice Labs",
          url: "https://www.katacoda.com/",
          type: "Practice",
        },
      ],
      completed: false,
    },
    {
      id: "aws",
      title: "AWS Cloud Infrastructure",
      description: "Master AWS services for cloud infrastructure",
      duration: "4-6 weeks",
      difficulty: "Intermediate",
      topics: [
        "VPC and Networking",
        "EC2, ECS, and EKS",
        "RDS and Database Services",
        "S3 and Storage Solutions",
        "IAM and Security",
        "CloudFormation and CDK",
      ],
      resources: [
        {
          name: "AWS Well-Architected Framework",
          url: "https://aws.amazon.com/architecture/well-architected/",
          type: "Documentation",
        },
        {
          name: "AWS Solutions Architect Course",
          url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          type: "Course",
        },
        {
          name: "AWS Hands-on Labs",
          url: "https://aws.amazon.com/getting-started/hands-on/",
          type: "Practice",
        },
      ],
      completed: false,
    },
    {
      id: "terraform",
      title: "Terraform Infrastructure as Code",
      description: "Learn Infrastructure as Code with Terraform",
      duration: "3-4 weeks",
      difficulty: "Intermediate",
      topics: [
        "Terraform Basics and Syntax",
        "State Management",
        "Modules and Reusability",
        "Providers and Resources",
        "Workspaces and Environments",
        "Best Practices and Security",
      ],
      resources: [
        {
          name: "HashiCorp Learn Platform",
          url: "https://learn.hashicorp.com/terraform",
          type: "Documentation",
        },
        {
          name: "Terraform Best Practices",
          url: "https://www.terraform.io/docs/cloud/guides/recommended-practices/index.html",
          type: "Course",
        },
        {
          name: "Terraform Examples",
          url: "https://github.com/hashicorp/terraform-provider-aws/tree/main/examples",
          type: "Practice",
        },
      ],
      completed: false,
    },
    {
      id: "docker",
      title: "Docker Containerization",
      description: "Containerize applications with Docker",
      duration: "2-3 weeks",
      difficulty: "Beginner",
      topics: [
        "Docker Basics and Architecture",
        "Dockerfiles and Images",
        "Containers and Volumes",
        "Docker Compose",
        "Multi-stage Builds",
        "Docker Security",
      ],
      resources: [
        {
          name: "Docker Official Tutorials",
          url: "https://docs.docker.com/get-started/",
          type: "Documentation",
        },
        {
          name: "Docker Deep Dive",
          url: "https://www.udemy.com/course/docker-mastery/",
          type: "Course",
        },
        {
          name: "Docker Practice",
          url: "https://github.com/docker/labs",
          type: "Practice",
        },
      ],
      completed: false,
    },
    {
      id: "kubernetes",
      title: "Kubernetes Orchestration",
      description: "Deploy and manage containerized applications",
      duration: "4-5 weeks",
      difficulty: "Advanced",
      topics: [
        "Kubernetes Architecture",
        "Pods, Services, and Deployments",
        "ConfigMaps and Secrets",
        "Ingress and Networking",
        "Helm Charts",
        "Monitoring and Logging",
      ],
      resources: [
        {
          name: "Kubernetes Official Documentation",
          url: "https://kubernetes.io/docs/",
          type: "Documentation",
        },
        {
          name: "Certified Kubernetes Administrator",
          url: "https://www.cncf.io/certification/cka/",
          type: "Course",
        },
        {
          name: "Kubernetes Playground",
          url: "https://www.katacoda.com/courses/kubernetes",
          type: "Practice",
        },
      ],
      completed: false,
    },
    {
      id: "cicd",
      title: "CI/CD Pipelines",
      description: "Build automated deployment pipelines",
      duration: "3-4 weeks",
      difficulty: "Intermediate",
      topics: [
        "GitHub Actions",
        "Jenkins Pipeline",
        "GitLab CI/CD",
        "ArgoCD and GitOps",
        "Pipeline Security",
        "Testing and Quality Gates",
      ],
      resources: [
        {
          name: "GitHub Actions Documentation",
          url: "https://docs.github.com/en/actions",
          type: "Documentation",
        },
        {
          name: "Jenkins Pipeline Tutorial",
          url: "https://www.jenkins.io/doc/book/pipeline/",
          type: "Course",
        },
        {
          name: "CI/CD Practice Projects",
          url: "https://github.com/topics/ci-cd",
          type: "Practice",
        },
      ],
      completed: false,
    },
    {
      id: "monitoring",
      title: "Monitoring and Observability",
      description: "Monitor applications and infrastructure",
      duration: "3-4 weeks",
      difficulty: "Intermediate",
      topics: [
        "Prometheus and Grafana",
        "ELK Stack (Elasticsearch, Logstash, Kibana)",
        "Application Performance Monitoring",
        "Infrastructure Monitoring",
        "Alerting and Incident Response",
        "Distributed Tracing",
      ],
      resources: [
        {
          name: "Prometheus Documentation",
          url: "https://prometheus.io/docs/",
          type: "Documentation",
        },
        {
          name: "Grafana Tutorials",
          url: "https://grafana.com/tutorials/",
          type: "Course",
        },
        {
          name: "Monitoring Setup Guides",
          url: "https://github.com/stefanprodan/dockprom",
          type: "Practice",
        },
      ],
      completed: false,
    },
    {
      id: "security",
      title: "DevOps Security",
      description: "Implement security best practices in DevOps",
      duration: "3-4 weeks",
      difficulty: "Advanced",
      topics: [
        "DevSecOps Principles",
        "Container Security",
        "Secrets Management",
        "Network Security",
        "Compliance and Governance",
        "Security Scanning and Testing",
      ],
      resources: [
        {
          name: "OWASP DevSecOps Guide",
          url: "https://owasp.org/www-project-devsecops-guideline/",
          type: "Documentation",
        },
        {
          name: "AWS Security Best Practices",
          url: "https://aws.amazon.com/security/security-learning/",
          type: "Course",
        },
        {
          name: "Security Tools Practice",
          url: "https://github.com/aquasecurity/trivy",
          type: "Practice",
        },
      ],
      completed: false,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return { bg: "#dcfce7", text: "#166534", border: "#bbf7d0" };
      case "Intermediate":
        return { bg: "#fef3c7", text: "#92400e", border: "#fde68a" };
      case "Advanced":
        return { bg: "#fee2e2", text: "#991b1b", border: "#fecaca" };
      default:
        return { bg: "#f3f4f6", text: "#374151", border: "#d1d5db" };
    }
  };

  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case "Documentation":
        return <BookOpenIcon style={{ height: "16px", width: "16px" }} />;
      case "Course":
        return <AcademicCapIcon style={{ height: "16px", width: "16px" }} />;
      case "Practice":
        return <CodeBracketIcon style={{ height: "16px", width: "16px" }} />;
      default:
        return <GlobeAltIcon style={{ height: "16px", width: "16px" }} />;
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
          DevOps Learning Path
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
          A comprehensive, step-by-step guide to master DevOps skills and ace
          your interviews. Follow this structured learning path to build your
          expertise.
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
            <ClockIcon
              style={{ height: "12px", width: "12px", marginRight: "8px" }}
            />
            Estimated: 6-8 months
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
            <StarIcon
              style={{ height: "12px", width: "12px", marginRight: "8px" }}
            />
            Interview Ready
          </div>
        </div>
      </div>

      {/* Learning Paths */}
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
          Structured Learning Paths
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "24px",
          }}
        >
          {learningPaths.map((path, index) => {
            const difficultyColors = getDifficultyColor(path.difficulty);
            return (
              <div
                key={path.id}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  padding: "24px",
                  background: "linear-gradient(135deg, white, #f9fafb)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 1px 3px rgba(0, 0, 0, 0.1)";
                }}
              >
                {/* Progress Indicator */}
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    height: "4px",
                    background: path.completed
                      ? "linear-gradient(to right, #10b981, #059669)"
                      : "#e5e7eb",
                  }}
                ></div>

                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "16px",
                      }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "#111827",
                          marginBottom: "4px",
                        }}
                      >
                        {path.title}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "4px 8px",
                            borderRadius: "9999px",
                            fontSize: "12px",
                            fontWeight: "500",
                            backgroundColor: difficultyColors.bg,
                            color: difficultyColors.text,
                            border: `1px solid ${difficultyColors.border}`,
                          }}
                        >
                          {path.difficulty}
                        </span>
                        <span style={{ fontSize: "14px", color: "#6b7280" }}>
                          {path.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  {path.completed && (
                    <CheckCircleIcon
                      style={{
                        height: "24px",
                        width: "24px",
                        color: "#10b981",
                      }}
                    />
                  )}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    marginBottom: "20px",
                    lineHeight: "1.6",
                  }}
                >
                  {path.description}
                </p>

                {/* Topics */}
                <div style={{ marginBottom: "20px" }}>
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "12px",
                    }}
                  >
                    Key Topics:
                  </h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "8px",
                    }}
                  >
                    {path.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "13px",
                          color: "#6b7280",
                        }}
                      >
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: "#3b82f6",
                          }}
                        ></div>
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div style={{ marginBottom: "20px" }}>
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "12px",
                    }}
                  >
                    Learning Resources:
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {path.resources.map((resource, resourceIndex) => (
                      <a
                        key={resourceIndex}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "8px 12px",
                          borderRadius: "6px",
                          backgroundColor: "#f8fafc",
                          color: "#3b82f6",
                          textDecoration: "none",
                          fontSize: "13px",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#dbeafe";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#f8fafc";
                        }}
                      >
                        {getResourceTypeIcon(resource.type)}
                        <span style={{ fontWeight: "500" }}>
                          {resource.name}
                        </span>
                        <span style={{ fontSize: "11px", color: "#6b7280" }}>
                          ({resource.type})
                        </span>
                        <ArrowRightIcon
                          style={{
                            height: "12px",
                            width: "12px",
                            marginLeft: "auto",
                          }}
                        />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  style={{
                    width: "100%",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    border: "none",
                    background: path.completed
                      ? "linear-gradient(135deg, #10b981, #059669)"
                      : "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(59, 130, 246, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {path.completed ? (
                    <>
                      <CheckCircleIcon
                        style={{ height: "16px", width: "16px" }}
                      />
                      Completed
                    </>
                  ) : (
                    <>
                      Start Learning
                      <ArrowRightIcon
                        style={{ height: "16px", width: "16px" }}
                      />
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Study Tips */}
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
          <LightBulbIcon
            style={{ height: "32px", width: "32px", color: "#f59e0b" }}
          />
          Study Tips for Success
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
              📚 Consistent Learning
            </h3>
            <ul
              style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}
            >
              <li style={{ marginBottom: "8px" }}>
                • Dedicate 1-2 hours daily to learning
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Follow the learning path in order
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Take notes and create your own documentation
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Review and practice regularly
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
              🛠️ Hands-on Practice
            </h3>
            <ul
              style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}
            >
              <li style={{ marginBottom: "8px" }}>
                • Set up your own lab environment
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Build real projects using these technologies
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Contribute to open-source projects
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Practice troubleshooting common issues
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
              🎯 Interview Preparation
            </h3>
            <ul
              style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}
            >
              <li style={{ marginBottom: "8px" }}>
                • Practice explaining concepts out loud
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Prepare for system design questions
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Build a portfolio of your projects
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Network with other DevOps professionals
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

