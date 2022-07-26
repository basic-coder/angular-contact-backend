const user = require('../models/User')
const COOKIE_EXPIRE = 1

exports.userRegister = async(req,res,next) =>{
    const {name,email,password} = req.body
    const User = await user.create({
        name,email,password
    })

    const token = User.JWTToken()

    const options = {
        expires:new Date(
            Date.now() + COOKIE_EXPIRE * 24 *60 *60*1000
        ),
        httpOnly: true,
    }


    User.save()
    res.status(200).cookie('token',token,options).json(token)
}

exports.loginUser = async(req,res,next) =>{
    const {email,password} = req.body

    if(!email || !password){
        return  res.status(401).json('no email or password');
    }

    const User = await user.findOne({email})

    const token = User.JWTToken()

    const options = {
        expires:new Date(
            Date.now() + COOKIE_EXPIRE * 24 *60 *60*1000
        ),
        httpOnly: true,
    }

    res.status(200).cookie('token',token,options).json(token)
}

exports.getUser = async(req,res,next) =>{
    const User = await user.find()
    res.status(200).json(User)   
}

exports.deleteUser = async(req,res,next) =>{
    const {id} = req.body
    const User = await user.findById(id)

    await User.remove()
    res.status(200).json('user is removed')   
}

exports.updateUser = async(req,res,next) =>{
    let User = await user.findById(req.params.id)

    if(!User){
        res.status(200).json('no user present')
    }

    User = await user.findByIdAndUpdate(req.params.id,req.body)

    res.status(200).json('user is updated')
}

const logoutUser = (req,res,next) =>{

    req.cookie("token",null,{
        expires:new Date(
            Date.now() 
        ),
        httpOnly: true,
    })

    res.status(200).json('logout')
}