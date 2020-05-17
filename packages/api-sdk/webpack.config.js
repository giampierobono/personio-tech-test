'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpackCommon = require(path.resolve(
  __dirname,
  '..',
  '..',
  'configurations',
  'webpack.config',
));

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
};

module.exports = webpackCommon(PATHS, 'api-sdk');
