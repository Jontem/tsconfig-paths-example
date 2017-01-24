const tsConfig = require("./tsconfig.json");
const tsConfigPaths = require("../../tsconfig-paths/lib/index");
const path = require("path");

const baseUrl = path.resolve(process.cwd(), "./");
tsConfigPaths.register({
    baseUrl,
    paths: tsConfig.compilerOptions.paths
});