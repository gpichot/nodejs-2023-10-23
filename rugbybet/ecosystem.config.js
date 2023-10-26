module.exports = {
  apps: [
    {
      name: "rugbybet-api",
      script: "./build/index.js",
      interpreter: "node",
      exec_mode: "cluster",
    },
  ],
};
