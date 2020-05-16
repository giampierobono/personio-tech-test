const path = require("path");
const rootConf = require(path.resolve("..", "..", ".eslintrc.js"));

module.exports = { extends: [rootConf] };
