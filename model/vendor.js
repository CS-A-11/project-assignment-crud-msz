var mongoose = require('mongoose');
var User = require("./user");
var Hostel = require("./hostel");

var vendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    CNIC: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    personal_address: {
        type: String,
        required: true
    },
    hostel: {
        type: Hostel.schema,
        required: true
    },
    user: {
        type: User.schema,
        required: true
    }

});

const vendor = module.exports = mongoose.model('vendor',vendorSchema);
