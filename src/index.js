const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    app: "zeroops-test-app",
    version: process.env.APP_VERSION || "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "ZeroOps Test App is running 🚀",
    environment: process.env.NODE_ENV || "production",
    deployedBy: "ZeroOps CI/CD Pipeline",
  });
});

app.get("/info", (req, res) => {
  res.json({
    name: "zeroops-test-app",
    node: process.version,
    uptime: process.uptime(),
    memory: process.memoryUsage(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;