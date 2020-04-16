const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');
const rimraf = require('rimraf');

function renameFolder(buildPath, outputPath) {
  return new Promise((resolve, reject) => {
    fs.rename(buildPath, outputPath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('Build completed Successfully');
      }
    });
  });
}

function execPostBuild(buildPath, outputPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(buildPath)) {
      if (fs.existsSync(outputPath)) {
        rimraf(outputPath, (err) => {
          if (err) {
            reject(err);
            return;
          }
          renameFolder(buildPath, outputPath)
          .then(val => resolve(val))
          .catch(e => reject(e));
        });
      } else {
        renameFolder(buildPath, outputPath)
          .then(val => resolve(val))
          .catch(e => reject(e));
      }
    } else {
      reject(new Error('build folder does not exist'));
    }
  });
}

module.exports = () => {
  const projectPath = path.resolve(process.cwd(), './node_modules/.bin/webpack' );
  const configPath = path.resolve(process.cwd(), 'webpack/webpack.prod.js');
  return new Promise((resolve, reject) => {
    exec(`${projectPath} --mode production --config ${configPath}`,
    (error) => {
      if (error) {
        reject(error);
        return;
      }
      execPostBuild(path.resolve(__dirname, '../build/'), path.join(__dirname, '../www'))
      .then((s) => {
        resolve(s);
      })
      .catch((e) => {
        reject(e);
      });
    });
  });
};
