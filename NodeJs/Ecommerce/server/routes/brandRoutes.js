
import express from 'express';
import brandController from '../controllers/brandController.js'
import middleware from '../middleware/auth.js'

const router = express.Router()


router.post('addBrand',middleware.auth, middleware.adminCheck, brandController.addBrand)
router.get('getAllBrands', brandController.getAllBrand)
router.delete('/deleteBrand', middleware.auth, middleware.adminCheck,brandController.deleteBrand)
router.put('/updateBrand', middleware.auth, middleware.adminCheck,brandController.updateBrand)


export default router;