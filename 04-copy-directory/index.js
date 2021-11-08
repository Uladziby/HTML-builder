const fs = require("fs");
const path = require("path");
const fsPromises = require("fs/promises");

const filePath = path.join(__dirname, "files");
const filesCopyPath = path.join(__dirname, "files-copy");

async function getOutFolder() {
  fsPromises
    .readdir(filesCopyPath)
    .then((files) => {
      files.map((file) => {
        fsPromises.rm(filesCopyPath + `/${file}`);
      });
    })
    .catch(() => {
      console.log("no such directory");
    })
    .finally(() => {
      createFolder();
    });
}

function createFolder() {
  console.log("create folder");
  fsPromises
    .mkdir(filesCopyPath)
    .catch((err) => {
      console.log("Folder is exist");
    })
    .finally(() => {
      copyToFolder();
    });
}

function copyToFolder() {
  console.log("copyToFile");
  fsPromises
  .readdir(filePath)
  .then((files) => {
    files.map((file) => {
      console.log("copy ", file, `to files-copy`);
      fsPromises
      .copyFile(
        filePath + `/${file}`,
        filesCopyPath + `/${file}`
      );
    });
  });
}

getOutFolder();

