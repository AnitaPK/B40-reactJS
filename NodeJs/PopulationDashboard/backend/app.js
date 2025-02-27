const express = require('express')
const cors = require('cors')
const worldRoute = require('./routes/worldRoutes')


const app = express()
const port = 7000

app.use(express.json())

app.use(cors())

app.use('/', worldRoute)





app.listen(port, () => console.log(`Example app listening on port ${port}!`))