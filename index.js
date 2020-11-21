const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, 'static')));

app.all('/*', function (req, res, next) {
    res.sendFile('./static/index.html', {root: __dirname});
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}!`);
});
