"use strict";

const path = require("path");
const webpackCommon = require(path.resolve(
  __dirname,
  "..",
  "..",
  "configurations",
  "webpack.config"
));
const rxPaths = require("rxjs/_esm5/path-mapping");
const PATHS = {
  src: path.join(__dirname, "./src"),
  dist: path.join(__dirname, "./dist"),
};
const partialConfig = webpackCommon(PATHS, "store");

module.exports = {
  ...partialConfig,
  externals: {
    ramda: "ramda",
    rxjs: "rxjs",
    "redux-observable": "redux-observable",
    reselect: "reselect",
    redux: "redux",
    "@reduxjs/toolkit": "@reduxjs/toolkit",
  }
};
