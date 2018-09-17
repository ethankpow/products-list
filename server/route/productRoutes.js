const router = require('express').Router()
const mongoose = require('mongoose')
const Product = require('../model/product')


router.get('/products', (req, res, next)=>{
    // end result = /products?page=1&category=tools&price=highest&search=bacon
    let sort_order;
    let productPerPage = 9
    let search_query = req.query.search || ''
    let page = req.query.page || 1
    let category_query = req.query.category || ''
    let price = req.query.price

    if(price == "highest") {
        sort_order = {price: -1}
    } else {
        sort_order = {price: 1}
    }

    let query = { 
        category: {$regex: category_query, $options : 'i'}, 
        name: {$regex: search_query, $options: 'i'} 
    }

    Product
        .find(query)
        .sort(sort_order)
        .skip((productPerPage * page) - productPerPage)
        .limit(productPerPage)
        .exec((err, products)=> {
            if (err) console.log(err)
            res.send(products)
        })
})
router.get('/product/:productid', (req, res) =>{
    let productId = req.params.productid
    Product.findById(productId).exec((err, product)=>{
        if(err) throw err
        res.send(product)
    })
})
router.post('/product', (req, res, next)=>{
    let product = new Product()
    
        product.category = req.body.category,
        product.price = req.body.price,
        product.name = req.body.name,
        product.image = req.body.image,
        product.review = []
        product.save((err) =>{
            if(err) console.log(err)
            res.send('product created sucessfully')
        })

})

router.delete('/product/:productid', (req, res, next)=>{
    let productId = req.params.productid
    console.log(productId)
    Product.deleteOne({ _id: productId}, (err)=>{
        if(err) throw err
        res.send('Product deleted successfully')
    })

})


module.exports = router

