
const db = require('../config/db')

function totalPopulation (req, res){
    try {
        // totalPop = 

        query1 = 'SELECT SUM(Population) AS TotalPop FROM country;'
        db.query(query1,(err, result)=>{
            if(err) throw err;
            console.log(result[0]);
            res.status(200).send({mgs:"success", totalPop:result[0].TotalPop})
        })


        // res.status(200).send({totalPop:totalPop,success:true})
        
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }

}

function totalContries(req,res){
    try {


    query2 = "SELECT COUNT(*) AS TotalCountries FROM country",
    db.query(query2,(err, result)=>{
        if(err) throw err;
        res.status(200).send({mgs:"Success", totalCountries:result[0].TotalCountries})
    })
} catch (error) {
    res.status(500).send({msg:"server Error"})
}
}


function top_ten_populated_countries(req,res){
    try {
        query2 = "SELECT Name, Population FROM country ORDER BY Population DESC LIMIT 10",
        db.query(query2,(err, result)=>{
            if(err) throw err;
            res.status(200).send({mgs:"Success", topTen:result})
        })
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
}

function least_ten_populated_countries(req,res){
    try {
        query2 = "SELECT Name, Population FROM country ORDER BY Population ASC LIMIT 10",
        db.query(query2,(err, result)=>{
            if(err) throw err;
            res.status(200).send({mgs:"Success", leastTen:result})
        })
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
}




module.exports = {totalPopulation,totalContries, top_ten_populated_countries, least_ten_populated_countries}