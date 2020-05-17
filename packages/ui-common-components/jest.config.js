// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('../../configurations/jest.base.config.js');

module.exports = {
  ...base,
  collectCoverageFrom: [...base.collectCoverageFrom, 'packages/ui-common-components/**/*.(ts|tsx)'],
  coverageDirectory: 'coverage/ui-common-components',
  globals: {
    ...base.globals,
    'ts-jest': {
      tsConfig: '<rootDir>/packages/ui-common-components/tsconfig.spec.json',
    },
  },
  rootDir: '../..',
  displayName: {
    name: 'ui-common-components',
    color: 'blue',
  },
  roots: [`<rootDir>/packages/ui-common-components`],
  name: '@personio/ui-common-components',
  testPathIgnorePatterns: [
    ...base.testPathIgnorePatterns,
    'api-sdk',
    'data-models',
    'candidates-board',
  ],
};
