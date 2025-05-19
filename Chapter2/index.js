const fs = require("fs");
const path = require("path");

//Read File
fs.readFile(path.join(__dirname, "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("Hi..");

//Write File
fs.writeFile(path.join(__dirname, "bye.txt"), "Just saying Bye!!", (err) => {
  if (err) throw err;
  console.log("Writing Complete");

  fs.appendFile(
    path.join(__dirname, "bye.txt"),
    "Nice to Meet you..",
    (err) => {
      if (err) throw err;
      console.log("Append Complete");
    }
  );

  //rename

  fs.rename(
    path.join(__dirname, "bye.txt"),
    path.join(__dirname, "newByee.txt"),
    (err) => {
      if (err) throw err;
      console.log("Rename Complete");
    }
  );
});

//error Handling
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
});
