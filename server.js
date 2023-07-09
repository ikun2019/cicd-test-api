const express = require('express');
const sequelize = require('./config/db');

const app = express();
app.use(express.json());



sequelize
  .sync()
  .then(result => {
    app.listen(8000, () => {
      console.log('Server is running!');
    });
  })
  .catch(err => {
    console.error(err);
  });