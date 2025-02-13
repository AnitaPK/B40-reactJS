const express = require('express')
require('dotenv').config()

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(202).send({data:'********Server content showing on web page',success:true})
})

app.get('/about',(req,res)=>{
    res.send('This is about us page')
})

app.get('/contact',(req,res)=>{
    res.send('thi is contact Page 123456723456')
})

app.post('/createUser',(req,res)=>{
    console.log(req.body)

    try {
        if(req.body.name == 'Tom Cruise'){
            res.status(202).send('Received')
        }else{
            res.status(400).send('Failure')
        }
    } catch (error) {
        res.status(500).send('serverError')
    }
})

port = process.env.PORT || 7002

app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`)
})
