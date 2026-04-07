require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: (origin, callback) => callback(null, true),
  credentials: true
}));
app.use(express.json());

app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));

mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/yoyos-hair')
  .then(() => {
    app.listen(process.env.PORT || 5001, () => console.log(`Server running on port ${process.env.PORT || 5001}`));
  })
  .catch((err) => console.error(err));
