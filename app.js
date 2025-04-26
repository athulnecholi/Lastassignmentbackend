const express= require('express')
const productModel=require('./Models/products')
const mongoose=require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()
const app=express()
app.use(cors())
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(5000, () => console.log('Server running on port 5000'));