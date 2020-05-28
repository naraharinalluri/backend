var express = require('express');
var router = express.Router();
var BusModel = require('../models/Buses');
var plan = require('../models/PlanTravel');
var busroute = require('../models/BusRoutes')
// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json()


async function addbus(companyName, busType, dept_time, arrival_time, from, to, availableSeats, pricePerSeat, Plan) {
    const busRoute = new busroute({
        companyName,
        busType,
        dept_time,
        arrival_time,
        from,
        to,
        availableSeats,
        pricePerSeat,
        Plan
    })
    const result = await busRoute.save();
    console.log(result);
}



// router.get('/', (req, res) => {
//     BusModel.find({ 'companyName': "RED BUS", 'startPoint': "Chennai", 'availableseats': "20" }, 'startPoint endPoint', (err, result) => {
//         if (err) res.send(err)
//         else res.json({ result })
//     })
// })



router.post('/bus', (req, res) => {
    addbus(req.body.companyName, req.body.busType, req.body.dept_time, req.body.arrival_time, req.body.from, req.body.to, req.body.availableSeats, req.body.pricePerSeat, '5ecfa33f0e85069ba96c9a59'),
        res.json()
})

// router.get('/bus', (req, res) => {
//     busroute.find().populate('Plan', 'date-_id').select('from').exec((err, result) => {
//         if (err) res.send(err)
//         else res.json(result)
//     })
// })

router.get('/bus', (req, res) => {
    busroute.find({ 'from': 'Chennai' }).populate('Plan', 'date-_id').exec((err, result) => {
        if (err) res.send(err)
        else res.json(result)
    })
})

router.post('/', (req, res) => {

    BusModel.find({ 'startPoint': req.body.text, 'endPoint': req.body.text2 }, (err, result) => {
        if (err) res.send(err)
        else res.json(result)
    })
})


router.get('/plan', (req, res) => {
    plan.find({}, (err, result) => {
        if (err) res.send(err)
        else res.json(result)
    })
})













module.exports = router;
