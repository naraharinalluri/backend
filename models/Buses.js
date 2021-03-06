const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BusSchema = new Schema({
    companyName: {
        type: String
    },
    busType: {
        type: String
    },
    busNumber: {
        type: String
    },
    startPoint: {
        type: String
    },
    endPoint: {
        type: String
    },
    availableSeats: {
        type: String
    },
    pricePerSeat: {
        type: String
    }
})

const BusModel = mongoose.model('bus', BusSchema)

module.exports = BusModel;