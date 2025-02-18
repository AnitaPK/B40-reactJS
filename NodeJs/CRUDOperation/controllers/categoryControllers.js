
const category = [{id:1, name:"electronic"},{id:2, name:'Telecommunication'}]


const addCategory = (req,res)=>{
    try {
        const newCat = {
            id:category.length+1,
            name:req.body.name
        }
        console.log(newCat)
        category.push(newCat)
        res.status(200).send({mgs:'added successfully', success:true})
        
    } catch (error) {
        res.status(500).send({error:error,msg:'server Error'})
    }
}


const getCategories = (req,res)=>{
    try {
        res.status(200).send({data:category,success:true})
        
    } catch (error) {
        res.status(500).send({error:error,msg:'server Error'})
    }
}

const updateCategory = (req,res)=>{
    console.log(req.params.ID)
    const id = req.params.ID
    const updetedName = req.body.name
    try {
        index = category.findIndex((e)=>e.id == id)
        if(index == -1){
            res.status(400).send({msg:'data not found', success:false})
        }else{
            category[index].name = updetedName
            res.status(200).send({msg:'data updated', success:true})
        }
        
    } catch (error) {
        res.status(500).send({error:error,msg:'server Error'})
        
    }
}


const deleteCategory = (req,res)=>{}


module.exports = {addCategory, getCategories, updateCategory, deleteCategory}