const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const Todo = require('./models/Todo');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api', async (req, res, next) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json({
      success: true,
      todos: todos
    });
  } catch (err) {
    console.error(err);
  }
});

app.post('/api', async (req, res, next) => {
  try {
    const todo = new Todo({
      title: req.body.todo
    });
    await todo.save();
    res.status(200).json({
      success: true
    });
  } catch (err) {
    console.error(err);
  }
});


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