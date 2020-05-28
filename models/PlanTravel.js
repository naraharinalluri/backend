const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanSchema = new Schema({

    fromPoint: {
        type: String
    },
    toPoint: {
        type: String
    },
    date: {
        type: Date
    }
}, { collection: 'planTravel' }
)
const plan = mongoose.model('plan', PlanSchema)

module.exports = plan;