'use strict';
const sh = require('child_process').execSync;

module.exports = function buildTS() {
    sh('tsc --build');
};



