module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: "6.0.4",
      skipMD5: true,
    },
    autoStart: true,
    instance: {},
  },
  mongoURLEnvName: "MONGODB_URI",
};
