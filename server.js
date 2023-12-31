import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('./dist/'));
app.use('/', (req, res) => {
  res.sendFile('dist/index.html', {root: '.'})
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});
