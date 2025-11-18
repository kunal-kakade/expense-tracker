module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "test-results", outputName: "junit.xml" }]
  ]
};
