const db = require('../config/database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getUser = async() => {
    const [result] = await db.query('SELECT * FROM users')
    return result
}

exports.register = async(username, password) => {
    try {
        const hashedPassowrd = await bcrypt.hash(password, 10)
        const [result] = await db.query(
            'INSERT INTO users(username, password, role) VALUES (?, ?, ?)', 
            [username, hashedPassowrd, 'admin']
        )

        if (result.affectedRows > 0) {
            return "berhasil!"
        } else {
            return `affected row : ${result.affectedRows}`
        }
        
    } catch (error) {
        return error.message
    }
}

exports.logIn = async(username, password) => {
    try {
        const [result] = await db.query('SELECT * FROM users WHERE username = (?)', [username])
        if (result.length > 0) {
            const isMatch = await bcrypt.compare(password, result[0].password)
            if (isMatch) {
                const token = jwt.sign({
                    id: result[0].id,
                    username: result[0].username
                }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
                return {token: token}
            } else {
                return 'password salah!'
            }
        } else {
            return 'user tidak ditemukan!'
        }
    } catch (error) {
        return error.message
    }
}