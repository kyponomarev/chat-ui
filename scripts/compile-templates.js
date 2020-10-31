'use strict';
const sh = require('child_process').execSync;

module.exports = function compileTemplates() {
    sh('handlebars app -f static/templates.js');
};



