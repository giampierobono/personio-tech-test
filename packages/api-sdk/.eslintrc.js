const path = require("path");
const rootConf = require(path.resolve("..", "..", ".eslint.rc"));

module.exports = { extends: [rootConf] };
