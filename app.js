const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const sanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

//Exporting Routers
const blogRouter = require('./routes/blogRouter');
const userRouter = require('./routes/userRouter');

const app = express();
const AppError = require('./Util/AppError');
const globalErrHandler = require('./Controllers/errorController');

app.use(helmet());

if (process.env.MODE == 'DEV') {
  console.clear();
  app.use(morgan('dev'));
}

app.use(sanitize());
app.use(xss());

const limiter = rateLimit({
  max: 120,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests, try after sometime'
});
app.use('/api', limiter);

app.use(hpp({ whitelist: [] }));
/*
express.json() is a method inbuilt in express to recognize the incoming Request Object 
as a JSON Object.
*/
app.use(express.json({ limit: '10kb' }));

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
