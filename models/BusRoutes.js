const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusRoute = new Schema({
    companyName: {
        type: String
    },
    busType: {
        type: String
    },
    dept_time: {
        type: String
    },
    arrival_time: {
        type: String
    },
    from: {
        type: String
    },
    to: {
        type: String
    },
    availableSeats: {
        type: String
    },
    pricePerSeat: {
        type: String
    },
    Plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'plan'
    }
}, { collection: 'busRoutes' }
)

const busroute = mongoose.model('busroute', BusRoute)

module.exports = busroute;