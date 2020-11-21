const express = require('express');
const cors = require('cors');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
}));

app.get('/', function (req, res) {
    res.send(req.query);
});

app.post('/', function (req, res) {
    res.send(req.body);
});

app.put('/', function (req, res) {
    res.send(req.body);
});

app.delete('/', function (req, res) {
    res.send(req.body);
});

app.all('/404', function (req, res) {
    res.status(404);
    res.send({error: 'error text'});
});


app.all('/headers', function (req, res) {
    res.send(req.headers);
});


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}!`);
});


