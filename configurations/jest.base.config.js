module.exports = {
  collectCoverageFrom: [
    '!**/*Mocks.ts',
    '!**/*Actions.ts',
    '!**/Mock*.ts',
    '!**/*Model.ts',
    '!**/*Enum.ts',
    '!**/index.ts',
    '!**/types.ts',
    '!config/setupEnzyme.ts',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
  coverageReporters: ['text', 'cobertura', 'html'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 40,
      lines: 70,
      statements: 60,
    },
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  rootDir: '../',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: ['**/__tests__/**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy',
    '^@vrbo/(.*)$': '<rootDir>/packages/$1',
  },
};
