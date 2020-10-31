'use strict';
const buildTS = require('./build-ts');
const completeExt = require('./complete-ext');
const compileTemplates = require('./compile-templates');
const buildStyles = require('./build-styles');
const buildAssets = require('./build-assets');

console.log('##### BUILD TYPESCRIPT ####');
buildTS();
console.log('##### COMPLETE EXTENSIONS ####');
completeExt();
console.log('##### COMPILE TEMPLATES ####');
compileTemplates();
console.log('##### BUILD STYLES ####');
buildStyles();
console.log('##### BUILD ASSETS ####');
buildAssets();
