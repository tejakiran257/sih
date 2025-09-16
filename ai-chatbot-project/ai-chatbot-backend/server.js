require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const userRoutes = require('./routes/user');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/user', userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

app.listen(5000, () => console.log('🚀 Server running on port 5000'));