
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const reservationSchema = new Schema({
    seats: {
        type: Array
    },
    isFull: {
        type: Boolean
    }
})

const serviceSchema = new Schema({
    from: {
        type: String
    },
    to: {
        type: String
    },
    dep: {
        type: String
    },
    arr: {
        type: String
    },
    fare: {
        type: Number
    }
})

const busSchema = new Schema({
    travels: {
        type: String,
    },
    busNumber: {
        type: String,
    },
    busType: {
        type: String
    },
    totalSeats: {
        type: Number
    },
    seatLayout: {
        type: String,
        default: '4/10'
    },
    reservation: {
        type: reservationSchema
    },
    service: {
        type: serviceSchema
    }

}, { collection: 'busBooking' }
)


const BusComb = mongoose.model('BusComb', busSchema);

module.exports = BusComb;




