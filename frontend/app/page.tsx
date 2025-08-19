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
} from "@heroicons/react/24/outline";

interface SystemStatus {
  name: string;
  status: "healthy" | "warning" | "error";
  uptime: string;
  responseTime: number;
}

interface Metric {
  name: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
}

export default function HomePage() {
  const [systemStatus, setSystemStatus] = useState<SystemStatus[]>([
    {
      name: "Frontend (Next.js)",
      status: "healthy",
      uptime: "99.9%",
      responseTime: 45,
    },
    {
      name: "Backend API (Node.js)",
      status: "healthy",
      uptime: "99.8%",
      responseTime: 120,
    },
    {
      name: "Database (PostgreSQL)",
      status: "healthy",
      uptime: "99.9%",
      responseTime: 15,
    },
    {
      name: "Cache (Redis)",
      status: "warning",
      uptime: "98.5%",
      responseTime: 5,
    },
  ]);

  const [metrics, setMetrics] = useState<Metric[]>([
    {
      name: "Total Requests",
      value: "1.2M",
      change: "+12.5%",
      changeType: "positive",
    },
    {
      name: "Average Response Time",
      value: "145ms",
      change: "-8.2%",
      changeType: "positive",
    },
    {
      name: "Error Rate",
      value: "0.02%",
      change: "-15.3%",
      changeType: "positive",
    },
    {
      name: "Active Users",
      value: "2.4K",
      change: "+5.7%",
      changeType: "positive",
    },
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "healthy":
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case "warning":
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
      case "error":
        return <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />;
      default:
        return <ClockIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "healthy":
        return "status-success";
      case "warning":
        return "status-warning";
      case "error":
        return "status-error";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          DevOps Interview Project
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive demonstration of modern DevOps practices including
          Infrastructure as Code, containerization, CI/CD pipelines, and
          monitoring.
        </p>
      </div>

      {/* Technology Stack */}
      <div className="card">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Technology Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
            <CloudIcon className="h-8 w-8 text-blue-600" />
            <div>
              <h3 className="font-medium text-gray-900">AWS Cloud</h3>
              <p className="text-sm text-gray-600">EKS, RDS, ElastiCache</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
            <CogIcon className="h-8 w-8 text-green-600" />
            <div>
              <h3 className="font-medium text-gray-900">Terraform</h3>
              <p className="text-sm text-gray-600">Infrastructure as Code</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
            <ServerIcon className="h-8 w-8 text-purple-600" />
            <div>
              <h3 className="font-medium text-gray-900">Kubernetes</h3>
              <p className="text-sm text-gray-600">Container Orchestration</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
            <ShieldCheckIcon className="h-8 w-8 text-orange-600" />
            <div>
              <h3 className="font-medium text-gray-900">Security</h3>
              <p className="text-sm text-gray-600">IAM, Secrets Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="card">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          System Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systemStatus.map((system, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">{system.name}</h3>
                {getStatusIcon(system.status)}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Status:</span>
                  <span className={getStatusClass(system.status)}>
                    {system.status.charAt(0).toUpperCase() +
                      system.status.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Uptime:</span>
                  <span className="font-medium">{system.uptime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Response Time:</span>
                  <span className="font-medium">{system.responseTime}ms</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics Dashboard */}
      <div className="card">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Performance Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 mb-2">{metric.name}</div>
              <div
                className={`text-xs font-medium ${
                  metric.changeType === "positive"
                    ? "text-green-600"
                    : metric.changeType === "negative"
                    ? "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {metric.change} from last week
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="card">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              Infrastructure as Code
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Terraform modules for AWS resources</li>
              <li>• VPC with public and private subnets</li>
              <li>• EKS cluster with auto-scaling</li>
              <li>• RDS PostgreSQL with encryption</li>
              <li>• Redis ElastiCache for caching</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              DevOps Practices
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Containerized applications with Docker</li>
              <li>• Kubernetes deployment manifests</li>
              <li>• CI/CD pipelines with GitHub Actions</li>
              <li>• Monitoring with Prometheus & Grafana</li>
              <li>• Security best practices implementation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
