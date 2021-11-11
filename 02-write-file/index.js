const fs = require("fs");
const path = require("path");
const { stdout , stdin} = require("process");

const filePath = path.join(__dirname, "out.txt");
console.log("Hey, write your text");
const ws = fs.createWriteStream(filePath);

stdin.on("data", (data) => {
  if (data.toString().split("\n")[0] === "exit") {
    process.exit();
  } else {
    ws.write(data);
    console.log("--something else?--");
  }
});

process.on("exit", () => stdout.write("--Bye bye--"));
process.on("SIGINT", () => {
  process.exit();
});
