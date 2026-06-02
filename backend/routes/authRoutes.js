const express = require('express')
const authMiddleware = require('../middlewares/auth')
const authControllers = require('../controllers/authControllers')

const router = express.Router()

router.get('/', authMiddleware ,authControllers.getUserDetail)

router.post('/register', authControllers.registerUser)
router.post('/login', authControllers.logIn)


module.exports = router