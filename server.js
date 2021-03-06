const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const mongoose = require('mongoose');

//Connecting to the mongoose server!
const uri = process.env.DATABASE_URI.replace(
  '<username>',
  process.env.DATABASE_USERNAME
).replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

/* .then(() => { console.log('Connected to the local database...');}) */
//Handling ERROR
const db = mongoose.connection;
db.once('open', function () {
  console.log('Connected to the mongo database');
});

app.listen(process.env.PORT, () => {
  console.log(`Api running on ${process.env.PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('Unhandled error occluded, shutting the server down');
  server.close(() => {
    process.exit(1);
  });
});
process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('Uncaught exception has occluded, shutting the server down');
  server.close(() => {
    process.exit(1);
  });
});
