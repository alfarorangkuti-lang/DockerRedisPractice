const db = require('../config/database')

exports.getAllSuppliers = async() => {
    try {
        const [result] = await db.query(
                'SELECT * FROM suppliers'
            )
        return result        
    } catch (error) {
        throw error
    }
}

exports.createSupplier = async(name) => {
    try {
        const [result] = await db.query(
            'INSERT INTO suppliers(name) VALUES (?)',
            [name]
        )
        if (result.affectedRows > 0) {
            return "berhasil"
        }
    } catch (error) {
        throw error
        
    }
}

exports.destroySupplier = async (id) => {
    try {
        const [result] = await db.query('DELETE FROM suppliers WHERE id = (?)', [id])
        if (result.affectedRows > 0) {
            return "berhasil"
        } else {
            return "gagal"
        }
    } catch (error) {
        throw error
    }
    
}

exports.updateSupplier = async(id, name) => {
    try {
        const [result] = await db.query(
            'UPDATE suppliers SET name = (?) WHERE id = (?)',
            [name, id]
        )
        if (result.affectedRows > 0) {
            return "berhasil"
        } else {
            return "gagal"
        }
    } catch (error) {
        throw error
    }
}

exports.getSupplierById = async(id) => {
    try {
        const [result] = await db.query(
            'SELECT * FROM suppliers WHERE id = (?)',
            [id]
        )
        return result[0]
    } catch (error) {
        throw error
    }
}