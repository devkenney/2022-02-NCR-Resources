const mongoose = require("mongoose");
const db = mongoose.connection;
require("dotenv").config;


async function main() {

  mongoose.connect(process.env.MONGO_URI,
    {useNewUrlParser: true, useUnifiedTopology: true
  });
  
  db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
  db.on('connected', () => console.log('mongo connected:'));
  db.on('disconnected', () => console.log('mongo disconnected'));
  
  db.on('open', () => {
    console.log('connection made!');
  });

}


module.exports = main;