const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


const ProductSchema = mongoose.Schema({
    id:{type:Number,require:true},
    title:{type:String,require:true},
    price:{type:Number,require:true},
    description:{type:Number,require:true},
    category:{type:Number,require:true},
    image:{type:String,require:true},
    rating: {
        rate: {
          type: Number,
          required: true
        },
        count: {
          type: Number,
          required: true
        }
      }
})
module.exports=mongoose.model('ProductModel',ProductSchema)
module.exports = mongoose.model('User', userSchema);
