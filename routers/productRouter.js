const express = require('express');
const router = express.Router();

const { Product } = require('../models/product')


/*** The Get API */

router.get('/', async (req, res) => {
   const productList = await Product.find()
   
   if(!productList)
   return res.status(404). send('product not found')
   res.status(200).send(productList)

})

router.get('/:id', async(req, res) => {

    const productItem = await Product.findById(req.params.id)

    if(!productItem)
    return res.status(404).send('product with' + req.params.id + 'not found')

    res.status(200).send(productItem)
    console.log(productItem);
})

/** The Update API */
router.put('/:id', async (req, res) => {
    let product = await Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price
    }, { new: true})
    if(!product)
    return res.status(404).send('product with' + req.params.id + 'not found')

    res.status(200).send(product)

})




/** The post API */

router.post('/', (req,res) =>{
    let product = new Product({
        name: req.body.name,
        price: req.body.price})
   product = product.save();
    if(!product)
    return res.status(404).send('product not posted')

    res.status(200).send(product)
    console.log(product);

})


router.post('/:id/review', async (req, res) => {
    let product = await Product.findById(req.params.id);
        if(!product) 
        return res.status(404).send('this produt is not found')

        let review = await product.review.push(req.body);
        await product.save()
        if(!review) 
            return res.status(500).send('review not accepted')


        res.status(200).send(product)

    

})
module.exports = router; 