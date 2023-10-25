module.exports = {
  preset: "@shelf/jest-mongodb",
  rootDir: "src",
  modulePathIgnorePatterns: ["<rootDir>/__tests__/utils"],
  transform: {
    "^.+\\.jsx?$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  watchPathIgnorePatterns: ["<rootDir>/globalConfig.json"],
};
