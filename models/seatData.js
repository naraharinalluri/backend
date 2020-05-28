const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seatData = new Schema({

    SeatData: {
        type: String
    },
    available: {
        type: Boolean
    },
    isFull: {
        type: Boolean
    },
    seatNumb: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'busroute'
    }
}, { collection: 'seatData' }
)
const seatData = mongoose.model('seatData', SeatData)

module.exports = seatData;