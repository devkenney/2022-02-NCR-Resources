require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

mongoose.connect(mongoURI,
  {useNewUrlParser: true, useUnifiedTopology: true}
);

db.on('error', (error) => console.log(error.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected!'));
db.on('disconnected', () => console.log('mongo disconnected!'));

db.on('open', () => console.log('connection opened!'));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'SUCCESS'
  })
});

const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

app.listen(PORT, () => console.log('listening on port ' + PORT));