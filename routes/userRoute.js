const express = require('express')
const router = express.Router()
const {userRegister, getUser, deleteUser, updateUser} = require('../controllers/userController')

router.route('/register').post(userRegister)
router.route('/getuser').get(getUser).delete(deleteUser)
router.route('/update/:id').put(updateUser)

module.exports = router