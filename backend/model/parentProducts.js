const db = require('../config/database')

exports.getAll = async() => {
    
    try {
        const [result] = await db.query('SELECT * FROM parent_products ORDER BY name DESC')
        return result    
    } catch (error) {
        return error.message
    }
    
}

exports.createParentProduct = async(name,memory,price) =>{ 
    try {
        const [result] = await db.query('INSERT INTO parent_products(name, memory, dgi_price) VALUES (?,?,?)',
        [name,memory,price])
        if (result.affectedRows > 0) {
            return "berhasil"
        }
        }   
    catch (error) {
        return error
    }
}

exports.getParentProductsByName = async(name) => {
    try {
        const [result] = await db.query('SELECT * FROM parent_products WHERE name = (?)',
            [name]
        )
        return result
    } catch (error) {
        return error.message
    }
}

exports.getParentProductsById = async(id) => {
    try {
        const [result] = await db.query('SELECT * FROM parent_products WHERE id = (?)',
            [id]
        )
        return result[0]
    } catch (error) {
        return error.message
    }
}

exports.editParentProductName = async(name, newName) => {
    try {
        const [result] = await db.query('UPDATE parent_products SET name = (?) WHERE name = (?)',
            [newName,name]
        )
        if (result.affectedRows > 0) {
            return "berhasil"
        }
    } catch (error) {
        return error.message
    }
}

exports.editParentProduct = async(name,memory,price,id) => {
    try {
        const [result] = await db.query('UPDATE parent_products SET name = (?), memory = (?), dgi_price = (?) WHERE id = (?)',
            [name,memory, price, id]
        )
        if (result.affectedRows > 0) {
            return "berhasil"
        }
    } catch (error) {
        return error.message
    }
}

exports.deleteParentProduct = async(id) => {
    try {
        const [result] = await db.query('DELETE FROM parent_products WHERE id = (?)', [id])
        if (result.affectedRows > 0) {
            return 'berhasil'
        } else {
            return 'terjadi kesalahan'
        }
    } catch (error) {
        return error.message
    }
}
