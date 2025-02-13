// import http from 'http';

const http = require('http')
const colors = require('colors')
require('dotenv').config()
const fs = require('fs')
const path = require('path')

port = process.env.PORT || 7000 

const server = http.createServer((req,res)=>{
    res.end('Hello from my Server. Which is created by MYSEFL... with confidence')
})

newFilePath = path.join(__dirname, 'newfile.txt')
console.log(__dirname.rainbow)

fs.writeFileSync(newFilePath, 'This cotent is at newfile within')
console.log(newFilePath)

data = fs.readFileSync(newFilePath, 'utf8')
console.log(data)

server.listen(port,()=>{
    console.log(process.env.PORT.green)
    console.log(`${'server started'.red}`),
        console.log(`http://localhost:${port}`)
})