const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "hello.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "hello.txt"));
    await fsPromises.writeFile(path.join(__dirname, "newHello.txt"), data);
    await fsPromises.appendFile(
      path.join(__dirname, "newHello.txt"),
      "\n\nNice to meet you!!"
    );
    await fsPromises.rename(
      path.join(__dirname, "newHello.txt"),
      path.join(__dirname, "newHello2.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "newHello2.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();
