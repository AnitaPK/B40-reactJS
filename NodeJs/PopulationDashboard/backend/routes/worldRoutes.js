const express = require('express')
const worldController = require('../controllers/worldControllers')


const router = express.Router()


router.get('/TotalPopulation', worldController.totalPopulation)

router.get('/TotalContries', worldController.totalContries)

// http://localhost:7000/TotalPopulation
// http://localhost:7000/TotalContries



module.exports = router;