const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ProductRoutes = require('./route/productRoutes')
const FakeDataRoute = require('./route/fakeData')
const app = express()
const port = 5000

//=========DB=================
mongoose.connect("mongodb://localhost:27017/products-list", { useNewUrlParser: true })
//=========Middleware=============================
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
//================================================
//===========routes================
app.use(ProductRoutes)
app.use(FakeDataRoute)
//////////////////////////////////////
app.listen(port, ()=>{
    console.log('Listening on' + ' ' + port)
})