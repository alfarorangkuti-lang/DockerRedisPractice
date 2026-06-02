const db = require('../config/database')

exports.getUser = async() => {
    const [result] = await db.query('SELECT * FROM users')
    return result
}