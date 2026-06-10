const express = require('express')
const categoriesController = require('../controllers/categoriesController')
const authMiddleware = require('../middlewares/auth')
const router = express.Router()


// get all categories
router.get('/', authMiddleware, categoriesController.getAllCategories)
// get category by id
router.get('/:id', authMiddleware, categoriesController.getCategoryById)
// delete category
router.delete('/:id', authMiddleware, categoriesController.deleteCategory)
// create : name,desc
router.post('/', authMiddleware, categoriesController.createCategory)
// edit : id,name,desc
router.put('/', authMiddleware, categoriesController.updateCategory)

module.exports = router