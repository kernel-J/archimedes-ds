module.exports = {
  moduleNameMapper: {
    '\\.(css|scss|sass|less)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.{ts,tsx}'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          esModuleInterop: true,
          jsx: 'react-jsx',
          module: 'commonjs',
          strict: true,
          target: 'es2020',
          types: ['jest', 'node', '@testing-library/jest-dom', 'vite/client'],
        },
      },
    ],
  },
}
