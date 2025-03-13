
import express from 'express';
import productController from '../controllers/productController.js'
import middleware from '../middleware/auth.js'

const router = express.Router()

router.post('/addProduct',middleware.auth, productController.addProduct)
router.get('/getAllProduct', productController.getAllProducts)
router.get('/getOneProduct/:id', productController.getProductById);
router.get('/countProduct', productController.countProducts)
// router.delete('/deleteProduct/:id', middleware.auth, middleware.adminCheck,productController.deleteProduct)
// router.put('/updateProduct/:id', middleware.auth, middleware.adminCheck,productController.updateProduct)
// Filter products based on query parameters
router.get('/filter', productController.filterProducts);


export default router;

// // create table product(
// //     product_id int auto_increment primary key ,
// //     name varchar(100) not null,
// //     discription varchar(255) ,
// //     stock int,
// //     price int not null,
// //     category_id int,
// //     foreign key (category_id) references category(category_id),
// //     brand_id int,
// //     foreign key (brand_id) references brand(brand_id)
// //     );

