const mongoose = require('mongoose');
const { Schema } = mongoose;





const productReviewSchema = new Schema({
    reviewer:{
        type:String,
        required: true
    },
    rating: {
        type: Number,
        min:0,
        max:5,
        required: true
    },
    review:{
        type: String,
        required:true
    },
})
/** For Product Details */
const productSchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    review: [ productReviewSchema ]
})

exports.Product = mongoose.model("Product", productSchema);