var mongoose = require('mongoose');

var roomSchema = new mongoose.Schema({
    hostel_id: String,
    room_no: Number,
    has_attachbath: Boolean,
    total_capacity: {type: Number, default: 1},   //how many people a room can withstand 
    current_capacity:{type: Number, default: 0},    //how many people currently living in the room
    rent_per_person: {type: Number, required: true},
    details: String
    //bills
});

const Room = module.exports = mongoose.model('Room',roomSchema);