const express = require('express')
const worldController = require('../controllers/worldControllers')


const router = express.Router()


router.get('/TotalPopulation', worldController.totalPopulation)

router.get('/TotalContries', worldController.totalContries)

router.get('/Top-10-populated-countries', worldController.top_ten_populated_countries )
router.get('/Least-10-populated-countries', worldController.least_ten_populated_countries )


// http://localhost:7000/TotalPopulation
// http://localhost:7000/TotalContries
// http://localhost:7000/Top-10-populated-countries
//http://localhost:7000/Least-10-populated-countries



module.exports = router;