#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const program = new commander_1.default.Command();
const cmd = require("node-cmd");
const fs = require("fs");
const path = require('path');
program.version('1.0.0')
    .option('--first', 'display just the first substring')
    .option('-a, --aaa', 'display just the first substring')
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    .option('-p, --pizza-type <type>', 'flavour of pizza')
    .action((str, options) => {
    fs.mkdirsSync(path.join(__dirname, `${str}`));
    console.log(`The ${str} folder is successfully created`);
    cmd.run(`npm install --save axios`, (err, data) => {
        if (!err) {
            console.log('init success');
            return;
        }
        console.error('init error');
    });
});
program.parse(process.argv);
const options = program.opts();
console.log(options);
