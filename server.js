const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const userData = req.body;

  // store user data in database (e.g. MongoDB)
  // ...

  res.send('User registered successfully!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
