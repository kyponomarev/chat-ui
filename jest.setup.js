const Handlebars = require('handlebars');
const sh = require('child_process').execSync;

global.Handlebars = Handlebars;
sh('handlebars app -f test-templates.js');
process.env.testServerUrl = 'http://localhost:3001';
