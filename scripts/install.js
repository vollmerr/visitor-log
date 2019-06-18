// installs packages in any directory that contains a package.json
// https://stackoverflow.com/questions/31773546/the-best-way-to-run-npm-install-for-nested-folders
const fs = require('fs');
const resolve = require('path').resolve;
const join = require('path').join;
const cp = require('child_process');
const os = require('os');
const chalk = require('chalk');

const appName = 'visitor-log';
// get base path
const root = resolve(__dirname, '../');
// npm binary based on OS
const npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

fs.readdirSync(root)
  .forEach(function (dir) {
    const dirPath = join(root, dir);

    // ensure path has package.json
    if (!fs.existsSync(join(dirPath, 'package.json'))) {
      return;
    }

    console.log(`${chalk.blueBright(appName)}: installing at ${chalk.magenta(dirPath)}\n`);

    // install inside directory
    cp.spawn(npmCmd, ['i'], { env: process.env, cwd: dirPath, stdio: 'inherit' });
  });
