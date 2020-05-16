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
    dist: path.join(__dirname, "./dist")
};
const partialConfig = webpackCommon(PATHS, "store");

module.exports = {
    ...partialConfig,
    resolve: {
        ...partialConfig.resolve,
        // Use the "alias" key to resolve to an ESM distribution
        alias: rxPaths()
    }
};