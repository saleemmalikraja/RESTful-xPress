const express = require('express');

const wrestlerRouter = express.Router();

const app = express();

const port = process.env.PORT || 4600;

wrestlerRouter.route('/wrestlers')
  .get((req, res) => {
    const response = {
      hello: 'hello',
    };
    res.json(response);
  });

app.use('/api', wrestlerRouter);

app.get('/', (re, res) => {
  res.send('Welcom to the first app :)');
});

app.listen(port, () => {
  console.log(`Server is up & running on port : ${port}  - !!!`);
});
