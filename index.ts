#! /usr/bin/env node
import commander from "commander";
const program = new commander.Command();
const cmd = require("node-cmd");
const fs = require("fs");
const path = require('path');

program
    .version('1.0.0')
    .option('--first', 'display just the first substring')
    .action((str, options) => {
        fs.mkdirsSync(path.join(__dirname, `${str}`));
        console.log(`The ${str} folder is successfully created`);
        /* cmd.run(`npm install --save axios`,
            (err: any, data: any) => {
                if (!err) {
                    console.log('init success');
                    return;
                }
                console.error('init error');
            }); */
    })

program.parse(process.argv);
const options = program.opts();
console.log(options);