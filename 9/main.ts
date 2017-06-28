declare namespace require {
    function resolve(name: string): string
}

const filename = require.resolve("lib/bar.jpg");
// hello();
console.log("require.resolve: " + filename);