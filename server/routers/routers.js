const express = require('express')
const { SignUp, Login, getDetailes } = require('../controllers/usercontrollers')
const { signupDataValidate } = require('../middleware/signupDataValidate')
const { loginDataValidate } = require('../middleware/loginDataValidate')
const { authenticateUser } = require('../middleware/authenticateUser')
const router = express.Router()

router.post('/signup',signupDataValidate,SignUp)
router.post('/login',loginDataValidate,Login)
router.get('/',authenticateUser,getDetailes)
module.exports = {router}



