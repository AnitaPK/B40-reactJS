import db from '../config/db.js'

function register(req,res){
    try {
            console.log(req.body)
            const q1 = "insert into user (name,email,password) values (" + req.body.name + "," + req.body.email + "," + req.body.password +")"
        console.log(q1);
        res.send("got data")

        } catch (error) {
        res.status(500).send({msg:"server Error"})
    }


}

function login(req,res){
    const email  = req.body.email;
    const password = req.body.password
    try {

        const query1 = `SELECT * FROM user;`
        db.query(query1,(err, result)=>{
            console.log("********")
            if(err) throw err;
            console.log(result[0]);
            
            res.status(200).send({mgs:"Login successfull", user:result[0], success:true, token:"12345678ertyu"})
        })
        
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
}


function getUserInfo(req,res){
    try {
            
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
}

export default {register, login, getUserInfo}
