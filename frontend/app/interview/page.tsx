"use client";

import {
  AcademicCapIcon,
  LightBulbIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

interface InterviewQuestion {
  id: string;
  category: string;
  question: string;
  answer: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tips: string[];
  followUpQuestions: string[];
}

export default function InterviewPage() {
  const interviewQuestions: InterviewQuestion[] = [
    {
      id: "1",
      category: "DevOps Fundamentals",
      question:
        "What is DevOps and how does it differ from traditional software development?",
      answer:
        "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle while delivering features, fixes, and updates frequently in close alignment with business objectives. It differs from traditional development by emphasizing collaboration, automation, continuous integration/continuous deployment (CI/CD), and rapid feedback loops. Traditional development often has siloed teams with long release cycles, while DevOps promotes cross-functional teams and frequent, small releases.",
      difficulty: "Beginner",
      tips: [
        "Emphasize the cultural shift and collaboration aspects",
        "Mention specific practices like CI/CD, Infrastructure as Code, and monitoring",
        "Explain the business benefits: faster time to market, improved quality, and reduced costs",
      ],
      followUpQuestions: [
        "How would you implement DevOps in a traditional organization?",
        "What are the key metrics you'd track in a DevOps transformation?",
        "How do you handle resistance to DevOps adoption?",
      ],
    },
    {
      id: "2",
      category: "Infrastructure as Code",
      question:
        "Explain the difference between Terraform and CloudFormation. When would you choose one over the other?",
      answer:
        "Terraform is a cloud-agnostic Infrastructure as Code tool that supports multiple cloud providers (AWS, Azure, GCP, etc.) and has a declarative configuration language (HCL). CloudFormation is AWS-specific and uses JSON/YAML templates. Terraform offers better state management, modularity, and provider ecosystem, while CloudFormation provides deeper AWS integration and native AWS service support. Choose Terraform for multi-cloud strategies, complex state management needs, or when you want more flexibility. Choose CloudFormation when working exclusively with AWS and need tight integration with AWS services.",
      difficulty: "Intermediate",
      tips: [
        "Highlight the multi-cloud capability of Terraform",
        "Mention state management differences",
        "Discuss the learning curve and community support",
      ],
      followUpQuestions: [
        "How do you handle Terraform state management in a team environment?",
        "What are the best practices for organizing Terraform modules?",
        "How would you migrate from CloudFormation to Terraform?",
      ],
    },
    {
      id: "3",
      category: "Containerization",
      question:
        "What is the difference between Docker and Kubernetes? When would you use each?",
      answer:
        "Docker is a containerization platform that packages applications and their dependencies into lightweight, portable containers. Kubernetes is a container orchestration platform that automates the deployment, scaling, and management of containerized applications. Docker handles the creation and running of individual containers, while Kubernetes manages multiple containers across multiple hosts, providing features like load balancing, service discovery, and automatic scaling. Use Docker for development environments, simple applications, or when you need to containerize a single application. Use Kubernetes for production environments, microservices architectures, or when you need advanced orchestration features.",
      difficulty: "Intermediate",
      tips: [
        "Explain the relationship: Docker creates containers, Kubernetes manages them",
        "Mention the complexity trade-off",
        "Discuss use cases for each technology",
      ],
      followUpQuestions: [
        "How do you optimize Docker images for production?",
        "What are the key components of a Kubernetes cluster?",
        "How would you troubleshoot a pod that's not starting?",
      ],
    },
    {
      id: "4",
      category: "CI/CD",
      question:
        "How would you design a CI/CD pipeline for a microservices application?",
      answer:
        "A CI/CD pipeline for microservices should include: 1) Code commit triggers automated builds, 2) Unit and integration tests run in parallel, 3) Security scanning (SAST/DAST) and dependency checks, 4) Container image building and vulnerability scanning, 5) Deployment to staging environment with automated testing, 6) Manual approval gate for production, 7) Blue-green or canary deployment to production, 8) Post-deployment monitoring and rollback capabilities. The pipeline should be modular to handle different microservices independently while maintaining consistency across the application.",
      difficulty: "Advanced",
      tips: [
        "Emphasize security and testing at each stage",
        "Mention deployment strategies (blue-green, canary, rolling)",
        "Discuss monitoring and rollback procedures",
      ],
      followUpQuestions: [
        "How do you handle database migrations in a CI/CD pipeline?",
        "What monitoring and alerting would you implement?",
        "How do you ensure zero-downtime deployments?",
      ],
    },
    {
      id: "5",
      category: "AWS Services",
      question:
        "Explain the difference between EC2, ECS, and EKS. When would you use each?",
      answer:
        "EC2 (Elastic Compute Cloud) provides virtual servers where you manage the operating system and applications. ECS (Elastic Container Service) is a managed container orchestration service that runs Docker containers on EC2 instances or Fargate (serverless). EKS (Elastic Kubernetes Service) is a managed Kubernetes service that provides full Kubernetes functionality. Use EC2 when you need full control over the infrastructure and applications. Use ECS for containerized applications when you want AWS-managed orchestration without Kubernetes complexity. Use EKS when you need Kubernetes features, have existing Kubernetes workloads, or want to avoid vendor lock-in.",
      difficulty: "Intermediate",
      tips: [
        "Explain the management overhead for each service",
        "Mention cost implications and scaling capabilities",
        "Discuss the learning curve for each option",
      ],
      followUpQuestions: [
        "How do you choose between ECS Fargate and ECS EC2?",
        "What are the networking considerations for each service?",
        "How do you monitor and troubleshoot each service?",
      ],
    },
    {
      id: "6",
      category: "Monitoring and Observability",
      question:
        "How would you set up monitoring and alerting for a production application?",
      answer:
        "A comprehensive monitoring setup should include: 1) Infrastructure monitoring (CPU, memory, disk, network) using tools like CloudWatch or Prometheus, 2) Application performance monitoring (APM) for response times, error rates, and business metrics, 3) Log aggregation and analysis using ELK stack or similar, 4) Distributed tracing for microservices using Jaeger or Zipkin, 5) Synthetic monitoring for end-to-end user experience, 6) Alerting with different severity levels and escalation procedures, 7) Dashboards for real-time visibility and historical analysis. The key is to monitor from the user's perspective and alert on symptoms, not just technical metrics.",
      difficulty: "Advanced",
      tips: [
        "Emphasize the importance of business metrics",
        "Discuss alert fatigue and proper threshold setting",
        "Mention the importance of runbooks and documentation",
      ],
      followUpQuestions: [
        "How do you handle alert fatigue?",
        "What metrics would you use to measure application health?",
        "How do you implement distributed tracing?",
      ],
    },
    {
      id: "7",
      category: "Security",
      question: "How do you implement security in a DevOps pipeline?",
      answer:
        "Security in DevOps (DevSecOps) should be integrated throughout the pipeline: 1) Code scanning (SAST) to detect vulnerabilities in source code, 2) Dependency scanning to identify vulnerable third-party libraries, 3) Container scanning for base image vulnerabilities, 4) Infrastructure scanning to detect misconfigurations, 5) Secrets management using tools like AWS Secrets Manager or HashiCorp Vault, 6) Network security with proper VPC configuration and security groups, 7) IAM policies following the principle of least privilege, 8) Compliance scanning and audit logging, 9) Security testing in staging environments, 10) Incident response procedures and security monitoring.",
      difficulty: "Advanced",
      tips: [
        "Emphasize the 'shift left' approach to security",
        "Mention compliance and regulatory requirements",
        "Discuss the balance between security and development velocity",
      ],
      followUpQuestions: [
        "How do you handle secrets in a CI/CD pipeline?",
        "What security tools would you recommend?",
        "How do you ensure compliance in a cloud environment?",
      ],
    },
    {
      id: "8",
      category: "System Design",
      question:
        "How would you design a highly available system that can handle 1 million users?",
      answer:
        "A highly available system for 1 million users would include: 1) Multi-AZ deployment across different availability zones, 2) Load balancers (ALB/NLB) for traffic distribution, 3) Auto-scaling groups to handle traffic spikes, 4) Database clustering with read replicas for read-heavy workloads, 5) Caching layer (Redis/ElastiCache) for frequently accessed data, 6) CDN for static content delivery, 7) Microservices architecture for scalability and fault isolation, 8) Circuit breakers and retry mechanisms for resilience, 9) Monitoring and alerting for proactive issue detection, 10) Disaster recovery plan with RTO/RPO objectives. The system should be designed to handle failures gracefully and maintain service availability.",
      difficulty: "Advanced",
      tips: [
        "Start with the requirements and constraints",
        "Discuss trade-offs between consistency, availability, and partition tolerance (CAP theorem)",
        "Mention cost optimization and performance considerations",
      ],
      followUpQuestions: [
        "How would you handle database scaling?",
        "What's your disaster recovery strategy?",
        "How do you ensure data consistency across services?",
      ],
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

  const categories = Array.from(
    new Set(interviewQuestions.map((q) => q.category))
  );

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
          DevOps Interview Questions
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
          Comprehensive interview questions with detailed answers, tips, and
          follow-up questions. Practice these to ace your DevOps interviews.
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
            <AcademicCapIcon
              style={{ height: "12px", width: "12px", marginRight: "8px" }}
            />
            {interviewQuestions.length} Questions
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
            <LightBulbIcon
              style={{ height: "12px", width: "12px", marginRight: "8px" }}
            />
            Expert Tips
          </div>
        </div>
      </div>

      {/* Questions by Category */}
      {categories.map((category) => (
        <div
          key={category}
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
            {category}
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {interviewQuestions
              .filter((q) => q.category === category)
              .map((question) => {
                const difficultyColors = getDifficultyColor(
                  question.difficulty
                );
                return (
                  <div
                    key={question.id}
                    style={{
                      border: "1px solid #e5e7eb",
                      borderRadius: "12px",
                      padding: "24px",
                      backgroundColor: "#f9fafb",
                    }}
                  >
                    {/* Question Header */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "#111827",
                            marginBottom: "12px",
                            lineHeight: "1.4",
                          }}
                        >
                          {question.question}
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
                              padding: "4px 12px",
                              borderRadius: "9999px",
                              fontSize: "14px",
                              fontWeight: "500",
                              backgroundColor: difficultyColors.bg,
                              color: difficultyColors.text,
                              border: `1px solid ${difficultyColors.border}`,
                            }}
                          >
                            {question.difficulty}
                          </span>
                          <span style={{ fontSize: "14px", color: "#6b7280" }}>
                            ID: {question.id}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Answer */}
                    <div style={{ marginBottom: "24px" }}>
                      <h4
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#111827",
                          marginBottom: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <InformationCircleIcon
                          style={{
                            height: "20px",
                            width: "20px",
                            color: "#3b82f6",
                          }}
                        />
                        Answer
                      </h4>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "#374151",
                          lineHeight: "1.7",
                          backgroundColor: "white",
                          padding: "16px",
                          borderRadius: "8px",
                          border: "1px solid #e5e7eb",
                        }}
                      >
                        {question.answer}
                      </p>
                    </div>

                    {/* Tips */}
                    <div style={{ marginBottom: "24px" }}>
                      <h4
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#111827",
                          marginBottom: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <LightBulbIcon
                          style={{
                            height: "20px",
                            width: "20px",
                            color: "#f59e0b",
                          }}
                        />
                        Interview Tips
                      </h4>
                      <ul
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        {question.tips.map((tip, index) => (
                          <li
                            key={index}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "12px",
                              fontSize: "14px",
                              color: "#6b7280",
                              lineHeight: "1.6",
                            }}
                          >
                            <CheckCircleIcon
                              style={{
                                height: "16px",
                                width: "16px",
                                color: "#10b981",
                                marginTop: "2px",
                                flexShrink: 0,
                              }}
                            />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Follow-up Questions */}
                    <div>
                      <h4
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#111827",
                          marginBottom: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <ArrowRightIcon
                          style={{
                            height: "20px",
                            width: "20px",
                            color: "#8b5cf6",
                          }}
                        />
                        Follow-up Questions
                      </h4>
                      <ul
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        {question.followUpQuestions.map((followUp, index) => (
                          <li
                            key={index}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "12px",
                              fontSize: "14px",
                              color: "#6b7280",
                              lineHeight: "1.6",
                              fontStyle: "italic",
                            }}
                          >
                            <ExclamationTriangleIcon
                              style={{
                                height: "16px",
                                width: "16px",
                                color: "#f59e0b",
                                marginTop: "2px",
                                flexShrink: 0,
                              }}
                            />
                            {followUp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ))}

      {/* Interview Preparation Tips */}
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
          Interview Preparation Strategy
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
              📝 Before the Interview
            </h3>
            <ul
              style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}
            >
              <li style={{ marginBottom: "8px" }}>
                • Research the company and their tech stack
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Practice explaining concepts out loud
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Prepare your project portfolio
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Review common DevOps tools and concepts
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
              🎯 During the Interview
            </h3>
            <ul
              style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}
            >
              <li style={{ marginBottom: "8px" }}>
                • Ask clarifying questions before answering
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Use the STAR method for behavioral questions
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Draw diagrams to explain complex concepts
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Be honest about what you don't know
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
              💡 Key Success Factors
            </h3>
            <ul
              style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}
            >
              <li style={{ marginBottom: "8px" }}>
                • Demonstrate hands-on experience
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Show problem-solving approach
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Emphasize continuous learning
              </li>
              <li style={{ marginBottom: "8px" }}>
                • Highlight collaboration and communication skills
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
