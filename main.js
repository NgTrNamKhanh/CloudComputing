var express = require('express')
var app = express()

app.set('view engine','hbs')
app.use(express.urlencoded(({extended:true})))
app.use(express.static('public'))

const sessions = require('express-session')

const oneDay = 1000*60*60*24;

var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://0.0.0.0:27017'

app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/allProducts',(req,res)=>{
    res.render('allProducts')
})
const PORT = process.env.PORT || 3000
app.listen(PORT, (req,res)=>{
    console.log("Server is running")
})
