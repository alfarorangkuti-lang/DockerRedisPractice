const express = require('express')
const suppliersController = require('../controllers/suppliersController')
const authMiddleware = require('../middlewares/auth')
const router = express.Router()

router.get('/', authMiddleware, suppliersController.getAllSuppliers)
router.get('/:id', authMiddleware, suppliersController.getSupplierById)
router.delete('/:id', authMiddleware, suppliersController.deleteSupplier)
router.post('/', authMiddleware, suppliersController.createSupplier)
router.put('/', authMiddleware, suppliersController.updateSupplier)

module.exports = router