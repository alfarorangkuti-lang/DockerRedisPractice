const db = require('../config/database')

exports.getAll = async() => {
    try {
        const [result] = await db.query(
                'SELECT * FROM categories'
            )
        return result        
    } catch (error) {
        return error.message
    }
}

exports.createCategory = async(category, description) => {
    try {
        const [result] = await db.query(
            'INSERT INTO categories(category,description) VALUES (?, ?)',
            [category, description]
        )
        if (result.affectedRows > 0) {
            return "berhasil"
        }
    } catch (error) {
        return error.message
        
    }
}

exports.destroyCategory = async (id) => {
    try {
        const [result] = await db.query('DELETE FROM categories WHERE id = (?)', [id])
        if (result.affectedRows > 0) {
            return "berhasil!"
        } else {
            return "gagal"
        }
    } catch (error) {
        return error.message
    }
    
}

exports.updateCategory = async(id, category, description) => {
    try {
        const [result] = await db.query(
            'UPDATE categories SET category = (?), description = (?) WHERE id = (?)',
            [category, description, id]
        )
        if (result.affectedRows > 0) {
            return "berhasil!"
        } else {
            return "gagal"
        }
    } catch (error) {
        return error.message
    }
}

exports.getCategoryById = async(id) => {
    try {
        const [result] = await db.query(
            'SELECT * FROM categories WHERE id = (?)',
            [id]
        )
        return result[0]
    } catch (error) {
        return error.message
    }
}