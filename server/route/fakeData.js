const router = require('express').Router()
const Product = require('../model/product')
const faker = require('faker')

router.get('/generate-fake-data', (req, res, next) => {
    for (let i = 0; i < 90; i++) {
      let product = new Product()
  
      product.category = faker.commerce.department()
      product.name = faker.commerce.productName()
      product.price = faker.commerce.price()
      product.image = `https://picsum.photos/200?image=${i}`
      product.save((err) => {
        if (err) throw err
      })
    }
    res.end()
  })
  
  module.exports = router
