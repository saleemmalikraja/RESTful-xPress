const express = require('express');

const app = express();

const port = process.env.PORT || 4600;

app.get('/', (re, res) => {
  res.send('Welcom to the first app :)');
});

app.listen(port, () => {
  console.log(`Server is up & running on port : ${port} !!!`);
});
