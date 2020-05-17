// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('../../configurations/jest.base.config.js');

module.exports = {
  ...base,
  collectCoverageFrom: [...base.collectCoverageFrom, 'packages/store/**/*.ts'],
  coverageDirectory: 'coverage/store',
  globals: {
    ...base.globals,
    'ts-jest': {
      tsConfig: '<rootDir>/packages/store/tsconfig.spec.json',
    },
  },
  rootDir: '../..',
  displayName: {
    name: 'store',
    color: 'redBright',
  },
  roots: [`<rootDir>/packages/store`],
  name: '@personio/store',
  testPathIgnorePatterns: [
    ...base.testPathIgnorePatterns,
    'api-sdk',
    'data-models',
    'candidates-board',
  ],
};
