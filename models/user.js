const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
      },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    role:{
        type:String,
        enum : ['admin','author','editor','maintainer','subscriber'],
        required:true,
    },
    plan:{
        type:String,
        enum: ['basic','company','enterprise','team'],
        required:true,
    },
    avatar: {
        type:String,
    },
    avatarColor: {
        type: String,
    },
    status:{
        type:String,
        enum:['pending','inactive','active'],
        default:'active',
    }
})
module.exports = mongoose.model("user", userSchema);
