const express = require("express");
const router = express.Router();
const logger = require("../utils/logger");

// Sample data
let users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "user" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "user" },
];

let posts = [
  {
    id: 1,
    title: "DevOps Best Practices",
    content: "Infrastructure as Code is essential...",
    authorId: 1,
  },
  {
    id: 2,
    title: "Kubernetes Deployment",
    content: "Container orchestration with K8s...",
    authorId: 2,
  },
  {
    id: 3,
    title: "AWS EKS Setup",
    content: "Setting up EKS cluster with Terraform...",
    authorId: 1,
  },
];

// GET /api - API information
router.get("/", (req, res) => {
  res.json({
    message: "DevOps Interview API",
    version: "1.0.0",
    endpoints: {
      users: "/api/users",
      posts: "/api/posts",
      stats: "/api/stats",
    },
    documentation: "/api/docs",
  });
});

// GET /api/users - Get all users
router.get("/users", (req, res) => {
  try {
    logger.info("Fetching all users");
    res.json({
      success: true,
      data: users,
      count: users.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    logger.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      timestamp: new Date().toISOString(),
    });
  }
});

// GET /api/users/:id - Get user by ID
router.get("/users/:id", (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
        timestamp: new Date().toISOString(),
      });
    }

    logger.info(`Fetching user with ID: ${userId}`);
    res.json({
      success: true,
      data: user,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    logger.error("Error fetching user:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      timestamp: new Date().toISOString(),
    });
  }
});

// POST /api/users - Create new user
router.post("/users", (req, res) => {
  try {
    const { name, email, role = "user" } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: "Name and email are required",
        timestamp: new Date().toISOString(),
      });
    }

    const newUser = {
      id: users.length + 1,
      name,
      email,
      role,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);

    logger.info(`Created new user: ${name}`);
    res.status(201).json({
      success: true,
      data: newUser,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    logger.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      timestamp: new Date().toISOString(),
    });
  }
});

// GET /api/posts - Get all posts
router.get("/posts", (req, res) => {
  try {
    logger.info("Fetching all posts");
    res.json({
      success: true,
      data: posts,
      count: posts.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    logger.error("Error fetching posts:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      timestamp: new Date().toISOString(),
    });
  }
});

// GET /api/posts/:id - Get post by ID
router.get("/posts/:id", (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const post = posts.find((p) => p.id === postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        error: "Post not found",
        timestamp: new Date().toISOString(),
      });
    }

    logger.info(`Fetching post with ID: ${postId}`);
    res.json({
      success: true,
      data: post,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    logger.error("Error fetching post:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      timestamp: new Date().toISOString(),
    });
  }
});

// POST /api/posts - Create new post
router.post("/posts", (req, res) => {
  try {
    const { title, content, authorId } = req.body;

    if (!title || !content || !authorId) {
      return res.status(400).json({
        success: false,
        error: "Title, content, and authorId are required",
        timestamp: new Date().toISOString(),
      });
    }

    const newPost = {
      id: posts.length + 1,
      title,
      content,
      authorId: parseInt(authorId),
      createdAt: new Date().toISOString(),
    };

    posts.push(newPost);

    logger.info(`Created new post: ${title}`);
    res.status(201).json({
      success: true,
      data: newPost,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    logger.error("Error creating post:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      timestamp: new Date().toISOString(),
    });
  }
});

// GET /api/stats - Get API statistics
router.get("/stats", (req, res) => {
  try {
    const stats = {
      users: {
        total: users.length,
        byRole: users.reduce((acc, user) => {
          acc[user.role] = (acc[user.role] || 0) + 1;
          return acc;
        }, {}),
      },
      posts: {
        total: posts.length,
        byAuthor: posts.reduce((acc, post) => {
          acc[post.authorId] = (acc[post.authorId] || 0) + 1;
          return acc;
        }, {}),
      },
      system: {
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        timestamp: new Date().toISOString(),
      },
    };

    logger.info("Fetching API statistics");
    res.json({
      success: true,
      data: stats,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    logger.error("Error fetching stats:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      timestamp: new Date().toISOString(),
    });
  }
});

// GET /api/docs - API documentation
router.get("/docs", (req, res) => {
  res.json({
    message: "API Documentation",
    version: "1.0.0",
    endpoints: {
      "GET /api": "Get API information",
      "GET /api/users": "Get all users",
      "GET /api/users/:id": "Get user by ID",
      "POST /api/users": "Create new user",
      "GET /api/posts": "Get all posts",
      "GET /api/posts/:id": "Get post by ID",
      "POST /api/posts": "Create new post",
      "GET /api/stats": "Get API statistics",
    },
    examples: {
      createUser: {
        method: "POST",
        url: "/api/users",
        body: {
          name: "John Doe",
          email: "john@example.com",
          role: "user",
        },
      },
      createPost: {
        method: "POST",
        url: "/api/posts",
        body: {
          title: "Sample Post",
          content: "This is a sample post content.",
          authorId: 1,
        },
      },
    },
  });
});

module.exports = router;
