const express = require('express')
const router = express.Router()
const {userRegister, getUser, deleteUser, updateUser, loginUser} = require('../controllers/userController')

router.route('/register').post(userRegister)
router.route('/login').post(loginUser)
router.route('/getuser').get(getUser).delete(deleteUser)
router.route('/update/:id').put(updateUser)

module.exports = router