// load .env file
require('dotenv').config()


// import express
const express=require('express')

const cors=require('cors')

const routes=require('./routes/domainRoutes')
require('./config/db')


// create server using express 
const dnsServer=express()
dnsServer.use(cors())
// convert all incoming json data to js data
dnsServer.use(express.json())

dnsServer.use(routes)


const PORT=5000 || process.env.PORT
dnsServer.listen(PORT,()=>{
    console.log(`_____Project Server Started At Port Number ${PORT}_____`);
})


// resolve api requests
dnsServer.get('/',(req,res)=>{
    res.send(`<h1>Projects server started....</h1>`)
})

