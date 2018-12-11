var mongoose = require('mongoose');
var Room = require("./room");

var featureSchema = new mongoose.Schema({
    fname: String,
    price: Number
});

var hostelSchema = new mongoose.Schema({
    address: String,
    longitude: Number,
    latitude: Number,
    //front_picture: Buffer,      //have to change -- this is for uploading front view picture
    owner_id: String,      //save the id of vendor
    additional_features: {type:[featureSchema],required: false},       //i.e. AC, cooler, geezer, mess and their costs
    rooms: {type: [Room.schema],required: false},
    description: {type: String,required: false}
});

const Hostel = module.exports = mongoose.model('Hostel',hostelSchema);