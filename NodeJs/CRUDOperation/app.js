const express = require("express");
const app = express();
const port = 7000;

app.use(express.json());

const productRoute = require('./route/productRoutes')
const categoryRoute = require('./route/categoryRoutes')

app.use('/product',productRoute)
app.use('/category', categoryRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// http://localhost:7000/product/:id


