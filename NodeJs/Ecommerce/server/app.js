import express from 'express';
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
// import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
// import brandRoutes from './routes/brandRoutes.js'

const app = express()
const port = 7000

app.use(express.json())

app.use(cors())

app.use('/user', userRoutes)
// app.use('/product', productRoutes)
app.use('/category', categoryRoutes)
// app.use('/brand', brandRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// http://localhost:7000/user/login
// http://localhost:7000/user/getUserInfo