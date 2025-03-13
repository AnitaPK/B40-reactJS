import db from "../config/db.js";



function addProduct(req,res){
  const { name, discription, stock, price, category_id, brand_id } = req.body;
  try {
    const q1 = `INSERT INTO product (name, discription, stock, price, category_id, brand_id) 
                VALUES (?, ?, ?, ?, ?, ?)`;

    db.query(q1, [name, discription, stock, price, category_id, brand_id], (err, result) => {
      if (err) throw err;
      res.status(200).send({ msg: "Product added successfully", success: true });
    });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
}
function getAllProducts(req,res){
    try {
        const q2 = 'SELECT * FROM product';
    
        db.query(q2, (err, result) => {
          if (err) throw err;
    
          if (result.length === 0) {
            return res.status(404).send({ msg: "No products found", success: false });
          }
    
          res.status(200).send({ products: result, success: true });
        });
      } catch (error) {
        res.status(500).send({ msg: "Server Error" });
      }
}
function deleteProduct(req,res){}
function updateProduct(req,res){}

function getProductById(req,res){
    // console.log(req.params)
    const id = req.params.id;
    try{
    const q6 = `select  * from product where product_id = ?`
    db.query(q6, [id], (err, result) => {
        if (err) throw err;
  
        if (result.length === 0) {
          return res.status(404).send({ msg: "Product not found", success: false });
        }
  
        res.status(200).send({ product: result[0], success: true });
      });
    } catch (error) {
      res.status(500).send({ msg: "Server Error" });
    }

}
function filterProducts(req,res){
    console.log(req.query)
    const {name} = req.query
    try{
    const q7 = `select * from product where name like '%${name}%'`
    db.query(q7, (err, result) => {
        if (err) throw err;
  
        if (result.length === 0) {
          return res.status(404).send({ msg: "Product not found", success: false });
        }
  
        res.status(200).send({ product: result, success: true });
      });
    } catch (error) {
      res.status(500).send({ msg: "Server Error" });
    }
}

function countProducts(req,res){
  try{
    const q8 = `select count(product_id) as totalProds from product;`
    db.query(q8, (err, result) => {
        if (err) throw err;
  
        if (result.length === 0) {
          return res.status(404).send({ msg: "Products not found", success: false });
        }
  
        res.status(200).send({ count: result[0], success: true });
      });
    } catch (error) {
      res.status(500).send({ msg: "Server Error" });
    }
}
export default {addProduct,getAllProducts,getProductById, filterProducts,deleteProduct, updateProduct, countProducts}