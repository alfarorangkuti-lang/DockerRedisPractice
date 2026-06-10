const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth')
const parentProductsController = require('../controllers/parentProductsController')

// return parents : [name: name, variants: {memory,price,name,id,created_at}]
router.get('/', authMiddleware, parentProductsController.getAllParentProducts)

// get by name : id,name,memory,price,created_at
router.get('/:name', authMiddleware, parentProductsController.getAllParentProductsByName)
// get by id
router.get('/byId/:id', authMiddleware, parentProductsController.getParentProductsById)
// create : name,memory,price
router.post('/', authMiddleware, parentProductsController.createParentProducts)
// edit name : name
router.put('/editName', authMiddleware, parentProductsController.editParentProductName)

// edit all : name,memory,price
router.put('/editParentProducts', authMiddleware, parentProductsController.editParentProduct)

// delete by id
router.delete('/:id', parentProductsController.deleteParentProduct)

module.exports = router
