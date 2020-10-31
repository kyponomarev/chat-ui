'use strict';
const sh = require('child_process').execSync;

module.exports = function buildAssets() {
    const sourcePath = './app/images';
    const destPath =  './static/images';
    sh(`cp -r ${sourcePath} ${destPath}`);
};
