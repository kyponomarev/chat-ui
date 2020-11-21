'use strict';

const fs = require('fs');
const path = require('path');

function findFilesByExtension(base, ext, files, result) {
    files = files || fs.readdirSync(base);
    result = result || [];

    files.forEach((file) => {
            const newBase = path.join(base, file);
            if (fs.statSync(newBase).isDirectory()) {
                result = findFilesByExtension(newBase, ext, fs.readdirSync(newBase), result);
            } else {
                if (file.substr(-1 * (ext.length + 1)) == '.' + ext) {
                    result.push(newBase);
                }
            }
        }
    );
    return result
}

function completeExt() {
    const files = findFilesByExtension('./static', 'js');

    files.forEach(f => {
        const fileContent = fs.readFileSync(f, 'utf8');
        const result = fileContent.replace(/(import.*?)((['"]);)/g, "$1.js$2");
        fs.writeFileSync(f, result, 'utf8');
    });
}

completeExt();



