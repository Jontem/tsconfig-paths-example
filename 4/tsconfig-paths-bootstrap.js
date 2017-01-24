const tsConfig = require("./tsconfig.json");
const tsConfigPaths = require("../../tsconfig-paths/lib/index");
const path = require("path");

const baseUrl = "./";
tsConfigPaths.register({
    baseUrl,
    paths: tsConfig.compilerOptions.paths
});