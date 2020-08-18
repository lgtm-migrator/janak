#!/usr/bin/env node
const path = require('path');
const sao = require('sao');
const cac = require('cac');
const chalk = require('chalk');
const { version } = require('./package.json');

const generator = path.resolve(__dirname, './');

const cli = cac('janak');

cli
  .command(
    '[out-dir] [options]',
    'Generate in a custom directory or current directory',
  )
  .action((outDir = '.') => {
    console.log(chalk`{cyan janak v${version}}`);
    console.log(chalk`✨  Generating new Vue.js package in {cyan ${outDir}}`);

    // See https://saojs.org/api.html#standalone-cli
    sao({ generator, outDir, logLevel: 2 })
      .run()
      .catch((err) => {
        console.trace(err);
        process.exit(1);
      });
  });

cli.help();

cli.version(version);

cli.parse();
