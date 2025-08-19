import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevOps Interview Project",
  description:
    "A comprehensive DevOps project demonstrating infrastructure as code, containerization, and CI/CD practices.",
  keywords: ["DevOps", "Terraform", "AWS", "Kubernetes", "Docker", "CI/CD"],
  authors: [{ name: "DevOps Engineer" }],
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #f9fafb, #dbeafe, #e0e7ff)",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          {/* Enhanced Header with Gradient */}
          <header
            style={{
              position: "sticky",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              borderBottom: "1px solid rgba(229, 231, 235, 0.5)",
              top: 0,
              zIndex: 50,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05), rgba(99, 102, 241, 0.05))",
              }}
            ></div>
            <div
              style={{
                position: "relative",
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "0 16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "24px 0",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div
                    style={{
                      padding: "8px",
                      background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                      borderRadius: "8px",
                    }}
                  >
                    <svg
                      style={{ height: "24px", width: "24px", color: "white" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h1
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      background:
                        "linear-gradient(to right, #111827, #1e40af, #7c3aed)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    DevOps Interview Project
                  </h1>
                </div>
                <nav style={{ display: "flex", gap: "32px" }}>
                  <a
                    href="/"
                    style={{
                      color: "#6b7280",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "500",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    Home
                  </a>
                  <a
                    href="/learning"
                    style={{
                      color: "#6b7280",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "500",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    Learning Path
                  </a>
                  <a
                    href="/interview"
                    style={{
                      color: "#6b7280",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "500",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    Interview Q&A
                  </a>
                  <a
                    href="/api"
                    style={{
                      color: "#6b7280",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "500",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    API
                  </a>
                  <a
                    href="https://github.com/wyatt-connolly/interview-practice"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#6b7280",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "500",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    GitHub
                  </a>
                </nav>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "32px 24px",
            }}
          >
            {children}
          </main>

          {/* Enhanced Footer */}
          <footer
            style={{
              position: "relative",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(12px)",
              borderTop: "1px solid rgba(229, 231, 235, 0.5)",
              marginTop: "64px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05), rgba(99, 102, 241, 0.05))",
              }}
            ></div>
            <div
              style={{
                position: "relative",
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "32px 16px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "32px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "16px",
                    }}
                  >
                    DevOps Interview Project
                  </h3>
                  <p style={{ color: "#6b7280", fontSize: "14px" }}>
                    A comprehensive demonstration of modern DevOps practices
                    including Infrastructure as Code, containerization, CI/CD
                    pipelines, and monitoring.
                  </p>
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "16px",
                    }}
                  >
                    Technologies
                  </h4>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      fontSize: "14px",
                      color: "#6b7280",
                    }}
                  >
                    <li>• AWS Cloud Infrastructure</li>
                    <li>• Terraform IaC</li>
                    <li>• Kubernetes Orchestration</li>
                    <li>• Docker Containerization</li>
                  </ul>
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "16px",
                    }}
                  >
                    Quick Links
                  </h4>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      fontSize: "14px",
                    }}
                  >
                    <li>
                      <a
                        href="/"
                        style={{
                          color: "#3b82f6",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/dashboard"
                        style={{
                          color: "#3b82f6",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="/api"
                        style={{
                          color: "#3b82f6",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                      >
                        API Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/wyatt-connolly/interview-practice"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#3b82f6",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                      >
                        GitHub Repository
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  marginTop: "32px",
                  paddingTop: "32px",
                  borderTop: "1px solid #e5e7eb",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    color: "#6b7280",
                    fontSize: "14px",
                  }}
                >
                  Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
