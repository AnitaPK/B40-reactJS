const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'world'
})


db.connect((err)=>{
    if(err){
        console.log('Error in connection', err)
    }else{
        console.log('successfully connected to mySQL')
    }
})

module.exports = db;