function addNewProduct (req, res){
    try {
      console.log("req.body", req.body);
      newProd = req.body;
      data.push(newProd);
      console.log("data****", data);
      res.status(200).send({ mgs: "ProductAdded", success: true });
    } catch (error) {
      res.status(500).send({ msg: "Server Error", error: error });
    }
  }

function getAllProducts (req, res) {
    try {
      res.send({ data: data, success: true });
    } catch (error) {
      res.status(500).send({ msg: "Server Error", error: error });
    }
  }

function updateProduct(req, res){
    try {
      console.log(req.params.id);
      id = req.params.id;
      console.log(req.body.Stock);
      index = data.findIndex((elmt) => elmt.ID == id);
      if (index == -1) {
        res.status(200).send({ msg: "Product not found", success: false });
      } else {
        data[index].Stock = req.body.Stock;
        res
          .status(200)
          .send({
            msg: "product updated successfully",
            success: true,
            data: data,
          });
      }
    } catch (error) {
      res.status(500).send({ msg: "Server Error", error: error });
    }
  }
function deleteProduct (req, res){
    try {
      console.log(req.params.id);
      id = req.params.id;
      index = data.findIndex((elmt) => elmt.ID == id);
      if (index == -1) {
        res.status(200).send({ msg: "Product not found", success: false });
      } else {
        data.splice(index, 1);
        console.log(data);
        res
          .status(200)
          .send({ msg: "product deleted successfully", success: true });
      }
    } catch (error) {
      res.status(500).send({ msg: "Server Error", error: error });
    }
  }

  function searchProduct(req, res){
    console.log(req.query)

    filData = data.filter((e)=> e.productName == req.query.productName)
    
    try {
        res.status(200).send({gaurav:filData})
        
    } catch (error) {
      res.status(500).send({ msg: "Server Error", error: error });
        
    }
  }

module.exports = {
    addNewProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    searchProduct
}