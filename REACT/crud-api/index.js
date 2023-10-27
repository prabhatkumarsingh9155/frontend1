const express = require("express");
require('dotenv').config()// env config
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors())



app.listen()={

}