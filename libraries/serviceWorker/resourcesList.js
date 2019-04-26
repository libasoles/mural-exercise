const fs = require('fs');
const path = require('path');

const resourcesPath = ['/static/fonts', '/static/videos'];
let resources = [];

function readFiles(rootFolder, folder) {
  const absolutePath = path.resolve(`${rootFolder}/${folder}`);
  const files = fs.readdirSync(absolutePath);

  return files;
}

function getResourcesList(folders) {
  try {
    const rootFolder = process.env.PWD;

    folders.forEach(folder => {
      const files = readFiles(rootFolder, folder);
      resources = resources.concat(files);
    });
  } catch (e) {
    /* eslint no-console: ["error", { allow: ["error"] }] */
    console.error(e);
  }

  return resources;
}

export default getResourcesList(resourcesPath);
