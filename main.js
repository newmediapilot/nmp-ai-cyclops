// main.js

import fs from 'fs';
import chokidar from 'chokidar';
import ora from 'ora';
import chalk from 'chalk';
import { diffLines } from 'diff';

// Retrieve filename from command line arguments
const [,, filename] = process.argv;

if (!filename) {
    console.error('Please provide a file to watch');
    process.exit(1);
}

let fileContent = '';

// Create a spinner
const spinner = ora('Watching for file changes').start();

// Initialize watcher
const watcher = chokidar.watch(filename, {
    persistent: true
});

// Add event listeners
watcher
    .on('change', path => {
        fs.readFile(path, 'utf-8', (err, newContent) => {
            if (err) throw err;

            const diff = diffLines(fileContent, newContent);

            diff.forEach((part) => {
                // green for additions, red for deletions
                // grey for common parts
                const color = part.added ? 'green' :
                    part.removed ? 'red' : 'grey';

                process.stderr.write(chalk[color](part.value));
            });

            // update fileContent with newContent
            fileContent = newContent;
        });
    })
    .on('error', error => {
        spinner.fail(`Watcher failed: ${error}`);
        process.exit(1);
    });
