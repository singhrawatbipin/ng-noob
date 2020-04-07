const mongoose = require('mongoose');

var Event = mongoose.model('Event', {
    eventName: { type: String },
    longDes: { type: String },
    eventDate: { type: Date },
    venueName: { type: String },
    mobNumber: { type: Number },
    pincode: { type: Number },
    address: { type: String },
}
);

module.exports = { Event };
