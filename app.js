const express = require('express');
const morgan = require('morgan');

//Exporting Routers
const blogRouter = require('./routes/blogRouter');
const userRouter = require('./routes/userRouter');

const app = express();

console.log(process.env.MODE);
if (process.env.MODE == 'DEV') {
  console.clear();
  app.use(morgan('dev'));
}

/*express.json() is a method inbuilt in express to recognize the incoming Request Object 
as a JSON Object.*/
app.use(express.json());

app.use('/api/v1/blogs', blogRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
