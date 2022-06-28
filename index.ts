#! /usr/bin/env node

import commander from "commander";
const cmd = require("node-cmd");
import fs from "fs";
import path from 'path';
const program = new commander.Command();

program
    .version('1.0.0')
    .argument('<string>', 'display just the first substring')
    .action((str, options) => {
        console.log(str);
        fs.mkdirSync(path.join(__dirname, `${str}`));
        console.log(`The ${str} folder is successfully created`);
        fs.writeFileSync(path.join(__dirname, str, '123.ts'), '123');
    })

program.parse(process.argv);