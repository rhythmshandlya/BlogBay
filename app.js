const express = require('express');
const morgan = require('morgan');

//Exporting Routers
const blogRouter = require('./routes/blogRouter');
const userRouter = require('./routes/userRouter');

const app = express();
const AppError = require('./Util/AppError');
const globalErrHandler = require('./Controllers/errorController');

if (process.env.MODE == 'DEV') {
  console.clear();
  app.use(morgan('dev'));
}

/*
express.json() is a method inbuilt in express to recognize the incoming Request Object 
as a JSON Object.
*/
app.use(express.json());

app.use('/api/v1/blogs', blogRouter);
app.use('/api/v1/user', userRouter);

app.all('*', (req, res, next) => {
  /* 
  const err = new Error(`Can't find ${req.originalUrl} on the server`);
  err.statusCode = 404;
  next(err); 
  */
  next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

app.use(globalErrHandler);
module.exports = app;
