const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seatSchema = new Schema({

    seatNumb: {
        type: String
    },
    available: {
        type: Boolean
    },
    isFull: {
        type: Boolean
    },
    Bus_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'busroute'
    }
}, { collection: 'seatSelection' }
)
const seatSelection = mongoose.model('seatSelection', seatSchema)

module.exports = seatSelection;