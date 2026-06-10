const express = require('express')
const authMiddleware = require('../middlewares/auth')
const authControllers = require('../controllers/authControllers')

const router = express.Router()

// return user
router.get('/', authMiddleware ,authControllers.getUserDetail)


// register : username, password
router.post('/register', authControllers.registerUser)

// login : username, passowrd
router.post('/login', authControllers.logIn)


module.exports = router