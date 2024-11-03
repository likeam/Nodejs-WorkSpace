import path from "path";

console.log(path.basename("c:\\nodejs\\index.js", ".js"));

console.log(path.dirname("c:\\comments\\vote\\index.js"));
console.log(path.extname("c:\\nodejs\\index.js"));

console.log(path.join("c:", "hania", "mavia", "rehman"));

console.log(path.join("c:", "hania", "mavia", "rehman", ".."));

console.log(path.join("c:", "hania", "mavia", "rehman", "..", ".."));

console.log(path.normalize("c:\\desk\\\\stor"));
