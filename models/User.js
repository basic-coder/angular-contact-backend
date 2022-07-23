const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:'string',
        required: true
    },
    email:{
        type:'string',
        required: true
    },
    photo:{
        type:'string',
        required: true
    },
    mobile:{
        type:'string',
        required: true
    },
    company:{
        type:'string',
        required: true
    },
    title:{
        type:'string',
        required: true
    },
    groupId:{
        type:'string',
        required: true
    }
})
module.exports = mongoose.model('User',userSchema)