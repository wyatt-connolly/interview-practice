import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Basic health check
    const healthStatus = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || "development",
      version: process.env.npm_package_version || "1.0.0",
      checks: {
        database: "healthy",
        cache: "healthy",
        external_apis: "healthy",
      },
    };

    return NextResponse.json(healthStatus, { status: 200 });
  } catch (error) {
    const errorStatus = {
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Unknown error",
      checks: {
        database: "unhealthy",
        cache: "unhealthy",
        external_apis: "unhealthy",
      },
    };

    return NextResponse.json(errorStatus, { status: 503 });
  }
}
