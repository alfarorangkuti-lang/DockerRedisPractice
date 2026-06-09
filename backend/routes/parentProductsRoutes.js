const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth')
const parentProductsController = require('../controllers/parentProductsController')

router.post('/', authMiddleware, parentProductsController.createParentProducts)
router.get('/', authMiddleware, parentProductsController.getAllParentProducts)
router.get('/:name', authMiddleware, parentProductsController.getAllParentProductsByName)
router.get('/byId/:id', authMiddleware, parentProductsController.getParentProductsById)
router.put('/editName', authMiddleware, parentProductsController.editParentProductName)
router.put('/editParentProducts', authMiddleware, parentProductsController.editParentProduct)
router.delete('/:id', parentProductsController.deleteParentProduct)

module.exports = router
