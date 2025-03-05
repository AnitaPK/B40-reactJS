import db from "../config/db.js";



function addBrand(){
    try {
        console.log(req.body);
        const q1 = `insert into brand (brand_name) 
        values('${req.body.brand_name}')`;
    
        db.query(q1, (err, result) => {
          if (err) throw err;
            res.status(200).send({ mgs: "brand added successefully", success: true });
       
            // res.status(200).send({ mgs: "Register unsuccess", success: false });
        });
      } catch (error) {
        res.status(500).send({ msg: "server Error" });
      }
}
function getAllBrand(req,res){}
function deleteBrand(req,res){}
function updateBrand(req,res){}

export default {addBrand,getAllBrand, deleteBrand, updateBrand}