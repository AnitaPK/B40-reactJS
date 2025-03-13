import db from "../config/db.js";
import jwt from 'jsonwebtoken'

function register(req, res) {
  try {
    console.log("register",req.body);
    const q1 = `insert into user (name, email, password, role) 
    values('${req.body.name}' ,'${req.body.email}','${req.body.password}','${req.body.role}')`;

    db.query(q1, (err, result) => {
      if (err) throw err;
        res.status(200).send({ mgs: "Register success B40", success: true });
   
        // res.status(200).send({ mgs: "Register unsuccess", success: false });
    });
  } catch (error) {
    res.status(500).send({ msg: "server Error" });
  }
}

function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email,password);
  try {
    // const query1 = `SELECT * FROM user where email = '${email}' and password = '${password}';`;
    db.query('SELECT * FROM user where email = ? and password = ?',[email, password], (err, results) => {
      console.log("********");
      if (err) throw err;
      if(results.length == 0){
        res
        .status(200)
        .send({
          mgs: "Auth failed",
          success: false,
        })
      }
      console.log(results[0]);
       const payload = {id:results[0].id, role:results[0].role};
        console.log("user from database",payload);
        const token = jwt.sign(payload, 'bach40',{expiresIn:'1h'})
        console.log(token)
      res
        .status(200)
        .send({
          mgs: "Login successfull",
          token: token,
          success: true,
        });
    });
  } catch (error) {
    res.status(500).send({ msg: "server Error" });
  }
}

function getUserInfo(req, res) {
    console.log(req.user)
  try {

    const q9 = `SELECT * FROM user where id=${req.user.id}`

    db.query(q9, (err, result) => {
      if (err) throw err;
        res.status(200).send({user:result[0], success: true });
   
        // res.status(200).send({ mgs: "Register unsuccess", success: false });
    });
  } catch (error) {
    res.status(500).send({ msg: "server Error" });
  }
}

export default { register, login, getUserInfo };
