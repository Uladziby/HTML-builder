const fs = require("fs");
const path = require("path");
const { stat } = require("fs");

const filePath = `${__dirname}/secret-folder`;

fs.readdir(filePath, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.map((file) => {
    if (file.isFile) {
      stat(path.join(__dirname, "secret-folder", file.name), (err, stats) => {
        const name = file.name.split(".");
        console.log(
          `${name[0]} - ${path.extname(file.name)} - ${stats.size * 0.001}kb`
        );
      });
    }
  });
});
