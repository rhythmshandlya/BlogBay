const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

//Exporting Routers
const blogRouter = require('./routes/blogRouter');
const userRouter = require('./routes/userRouter');

const app = express();

if (process.env.mode === 'DEV') {
  console.clear();
  app.use(morgan('dev'));
}

/*express.json() is a method inbuilt in express to recognize the incoming Request Object 
as a JSON Object.*/
app.use(express.json());

app.use('/api/v1/blog', blogRouter);
app.use('/api/v1/user', userRouter);

module.exports = app;
