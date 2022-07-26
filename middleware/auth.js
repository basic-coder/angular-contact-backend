
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = 'SECRET'

exports.isAuthenticated = (req,res,next) =>{
    const {token} = req.cookie();

    if(!token){
        return res.status(401).json('login again');
    }

    decodedData = jwt.verify(token,JWT_SECRET);

    req.user = await User.findById(decodedData.id)

    next()

}