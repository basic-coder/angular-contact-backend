const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'SECRET'

const userSchema = new mongoose.Schema({
    name:{
        type:'string',
    },
    email:{
        type:'string',
    },
    photo:{
        type:'string',
    },
    mobile:{
        type:'string',
    },
    company:{
        type:'string',
    },
    title:{
        type:'string',
    },
    groupId:{
        type:'string',
    }
})

//JWT TOKEN
userSchema.methods.JWTToken = function () {
    return jwt.sign({id:this._id},JWT_SECRET,{
        expiresIn: '5d'
    })
}

module.exports = mongoose.model('User',userSchema)