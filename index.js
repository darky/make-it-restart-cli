#!/usr/bin/env node

const restart = require('make-it-restart');

const command = process.argv.slice(2).join(' ');

const restartor = restart(command, process.env);

process.stdin.on('data', data => {
    if (data.toString() === 'rs\n') {
        restartor();
    }
});

restartor();
