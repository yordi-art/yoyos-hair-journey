require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/products', require('./routes/products'));
app.use('/orders', require('./routes/orders'));

mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/yoyos-hair')
  .then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch((err) => console.error(err));
