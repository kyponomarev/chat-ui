'use strict';
const sh = require('child_process').execSync;

module.exports = function buildStyles() {
    sh('postcss app/styles/styles.css -d static -u autoprefixer postcss-import-ext-glob postcss-import');
};



