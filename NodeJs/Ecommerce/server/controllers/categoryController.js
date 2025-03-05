import db from "../config/db.js";



function addCategory(req,res){
    try {
        console.log(req.body);
        const q1 = `insert into category (category_name) 
        values('${req.body.category_name}')`;
    
        db.query(q1, (err, result) => {
          if (err) throw err;
            res.status(200).send({ mgs: "category added successefully", success: true });
       
            // res.status(200).send({ mgs: "Register unsuccess", success: false });
        });
      } catch (error) {
        res.status(500).send({ msg: "server Error" });
      }
}
function getAllCategory(req,res){
    try{

        const q2 =  'select * from category'
        db.query(q2, (err, result) => {
            if (err) throw err;
              res.status(200).send({ categories:result, success: true });
         
              // res.status(200).send({ mgs: "Register unsuccess", success: false });
          });
        } catch (error) {
          res.status(500).send({ msg: "server Error" });
        }
}
function updateCategory(req,res){
    console.log(req.body)
    const {category_name} =req.body;
    const id = req.params.id
    try {
        const q3 = `update category set category_name = ? where category_id = ?;`
        db.query(q3,[category_name, id],(err,result)=>{
            if (err) throw err;
            console.log(result)
            if(result.length == 0){
            res.status(400).send({mgs:"Category not",success:false})
            }else{
            res.status(200).send({mgs:"Category name updated",result:result[0], success:true})
            }
        })
    } catch (error) {
        res.status(500).send({ msg: "server Error" });
    }
}
function deleteCategory(req,res){
    const id = req.params.id
    try {
        const q4 = `delete from category where category_id=?;`
        db.query(q4,[id],(err,result)=>{
            if (err) throw err;
            console.log(result)
            if(result.length == 0){
            res.status(400).send({mgs:"Category not found",success:false})
            }else{
            res.status(200).send({mgs:"Category deleted",result:result[0], success:true})
            }
        })
    } catch (error) {
        res.status(500).send({ msg: "server Error" });
        
    }
}

export default {addCategory,getAllCategory, deleteCategory, updateCategory}
