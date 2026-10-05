module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["**/*.test.{ts,tsx}"],
  moduleNameMapper: {
    "\\.(css|scss|sass|less)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: {
          jsx: "react-jsx",
          module: "commonjs",
          target: "es2020",
          esModuleInterop: true,
          strict: true,
          types: ["jest", "node", "@testing-library/jest-dom", "vite/client"],
        },
      },
    ],
  },
};