import mysql from 'mysql2'

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'batch40ecommerse'
})

db.connect((err)=>{
    if(err){
        console.log('Error in connection', err)
    }else{
        console.log('successfully connected to mySQL')
    }
})

export default db;