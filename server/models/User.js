const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'cant be blank']
    },
    email:  {
        type: String, 
        lowercase: true, 
        unique: true, 
        required: [true, 'cant be blank'],
        index: true,
        validate: [isEmail, 'invalid email']

    },
    password: {
        type: String, 
        required: [true, 'cant be blank']

    },
    picture: {
        type: String, 

    },
    newMessage: {
        type: Object, 
        default: {}
    },
    status: {
        type: String, 
        default: 'online'
    }
}, {minimize: false});

const User = mongoose.model('User, UserSchema');

module.exports = User;