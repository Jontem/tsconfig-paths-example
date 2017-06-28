declare namespace require {
    function resolve(name: string): string
}

const filename = require.resolve("lib/bar");
// hello();
console.log(filename);