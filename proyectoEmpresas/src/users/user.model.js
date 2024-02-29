'use strict'

import { Schema, model } from 'mongoose'

const userSchema = Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        minLength: [8, 'Password must be 8 characters']
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true,
        nimLength: 8,
        maxLength: 8
    },
    address:{
        type: String,
        required: true
    },
    role:{
        type: String,
        uppercase: true,
        enum: ['ADMIN'],
        required: true
    },
},{
    versionKey: false
})

export default model('user', userSchema)