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
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('Connected to the mongo database');
});

//Listening to requests on local port
const port = process.env.port;
app.listen(port, () => {
  console.log(`App listening on port port ${port}...`);
});
