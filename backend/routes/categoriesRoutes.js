const express = require('express')
const categoriesController = require('../controllers/categoriesController')
const authMiddleware = require('../middlewares/auth')
const router = express.Router()

router.get('/', authMiddleware, categoriesController.getAllCategories)
router.get('/:id', authMiddleware, categoriesController.getCategoryById)
router.delete('/', authMiddleware, categoriesController.deleteCategory)
router.post('/', authMiddleware, categoriesController.createCategory)
router.put('/', authMiddleware, categoriesController.updateCategory)

module.exports = router