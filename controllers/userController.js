const user = require('../models/User')

exports.userRegister = async(req,res,next) =>{
    const {name} = req.body
    const User = await user.create({
        name
    })
    User.save()
    res.status(200).json('user is saved')
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