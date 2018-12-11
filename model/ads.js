const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    vendorID:{          //the vendor who is posting the ad
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    category:{      //boys or girls hostel
        type:Number,    //0 for boys 1 for girls
        required:true
    },
    total_capacity: {
        type: Number,
        required:true,
        default: 1
    },
    current_capacity: {
        type: Number,
        required:true,
        default: 0
    },
    description:{
        type:String,
        required:true
    },
    price_per_person:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    near_uni:{
        type:String,
        required:true
    }
});


const Ads = module.exports = mongoose.model('Ads', PostSchema)
