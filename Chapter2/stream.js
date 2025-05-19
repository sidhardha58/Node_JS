const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "long.txt"), {
  encoding: "utf8",
});

const ws = fs.createWriteStream(path.join(__dirname, "newLong.txt"));

rs.pipe(ws);
