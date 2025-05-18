console.log("hello");

// OS

const os = require("os");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

//
console.log(__dirname);
console.log(__filename);

//path
const path = require("path");

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

//import file

const { add, sub, mul, div } = require("./math");

console.log(add(3, 2));
console.log(sub(3, 2));
console.log(mul(3, 2));
console.log(div(3, 2));
