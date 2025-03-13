import express from 'express';
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import brandRoutes from './routes/brandRoutes.js'
import path from 'path'
import { dirname } from 'path';

const app = express()
const port = 7000

app.use(express.json())

app.use(cors())

app.use('/user', userRoutes)
app.use('/product', productRoutes)
app.use('/category', categoryRoutes)
app.use('/brand', brandRoutes)
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, 'uploads/')));
console.log(__dirname)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// http://localhost:7000/user/login
// http://localhost:7000/user/getUserInfo