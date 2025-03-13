
import express from 'express';
import brandController from '../controllers/brandController.js'
import middleware from '../middleware/auth.js'

const router = express.Router()

router.post('/addBrand',middleware.auth,brandController.addBrand)
router.get('/getAllBrands', brandController.getAllBrand)
router.delete('/deleteBrand/:id', middleware.auth, brandController.deleteBrand)
router.put('/updateBrand/:id', middleware.auth, brandController.updateBrand)

export default router;
