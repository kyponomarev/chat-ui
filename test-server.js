const express = require('express');
const cors = require('cors');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors({
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send(req.query);
});

app.post('/', (req, res) => {
  res.send(req.body);
});

app.put('/', (req, res) => {
  res.send(req.body);
});

app.delete('/', (req, res) => {
  res.send(req.body);
});

app.all('/404', (req, res) => {
  res.status(404);
  res.send({error: 'error text'});
});

app.all('/headers', (req, res) => {
  res.send(req.headers);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${PORT}!`);
});
