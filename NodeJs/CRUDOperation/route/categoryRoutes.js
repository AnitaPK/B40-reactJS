const express = require('express')
const categoryController = require('../controllers/categoryControllers')
const router = express.Router();


router.get('/', categoryController.getCategories)
router.post('/', categoryController.addCategory)
router.put('/:ID', categoryController.updateCategory)
router.delete('/:id', categoryController.deleteCategory)


module.exports = router;
