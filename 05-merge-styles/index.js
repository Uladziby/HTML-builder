const fsPromises = require("fs/promises");
const path = require("path");
const fs = require("fs");

const pathToStyles = path.join(__dirname, "styles");
const pathToOutDir = path.join(__dirname, "project-dist");
const arrResult = [];

async function readFolderStyles() {
  const readDir = await fsPromises.readdir(pathToStyles, {
    withFileTypes: true,
  });
  console.log(readDir);
  readDir.map((file) => {
    if (file.isFile() && path.extname(file.name) === ".css") {
      arrResult.push(file);
    }
  });
}

async function readStyles() {
  arrResult.map((file) => {
    try {
      fsPromises
        .readFile(pathToStyles + `/${file.name}`, "utf8")
        .then((resp) => {
          fsPromises.appendFile(pathToOutDir + `/bundle.css`, resp, "utf8");
        });
    } catch {
      console.log("err");
    }
  });
}

async function mergeStyles() {
  try {
    await fsPromises.rm(pathToOutDir + "/bundle.css", { recursive: true });
  } catch {
    console.log("dir is not exis");
  } finally {
    await readFolderStyles();
    await readStyles();
  }
}

mergeStyles();
