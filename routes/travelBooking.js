var express = require('express');
var router = express.Router();
var BusModel = require('../models/Buses');
var plan = require('../models/PlanTravel');
var BusComb = require('../models/BusComb')


router.get('/', (req, res) => {
    BusModel.find({ 'companyName': "RED BUS", 'startPoint': "Chennai", 'availableseats': "20" }, 'startPoint endPoint', (err, result) => {
        if (err) res.send(err)
        else res.json({ result })
    })
})

router.post('/search', (req, res) => {
    BusComb.find({ 'service.from': req.body.text, 'service.to': req.body.text2 }).select().exec((err, result) => {
        if (err) res.send(err)
        else res.json(result)
    })
})

// router.post('/search', async (req, res, next) => {
//     // let body = req.body
//     // let { from, to } = body
//     try {
//         const result = await BusModel.find({ 'service.from': req.body.from, 'service.to': req.body.to })
//         res.json({
//             result
//         })
//     } catch (err) {
//         next(err)
//     }
// });

// router.post('/bus', (req, res) => {
//     addbus(req.body.companyName, req.body.busType, req.body.dept_time, req.body.arrival_time, req.body.from, req.body.to, req.body.availableSeats, req.body.pricePerSeat, '5ecfa33f0e85069ba96c9a59'),
//         res.json()
// })

router.get('/bus', (req, res) => {

    busroute.find().populate('Plan', 'date-_id').select('Plan').exec((err, result) => {
        if (err) res.send(err)
        else res.json(result)
    })
})

// router.get('/bus', (req, res) => {
//     busroute.find({ 'from': 'Chennai' }).populate('Plan', 'date-_id').exec((err, result) => {
//         if (err) res.send(err)
//         else res.json(result)
//     })
// })

router.post('/busmodel', (req, res) => {

    BusModel.find({ 'startPoint': req.body.text, 'endPoint': req.body.text2 }, (err, result) => {
        if (err) res.send(err)
        else res.json(result)
    })
})

// router.get('/plan', (req, res) => {
//     plan.find({}, (err, result) => {
//         if (err) res.send(err)
//         else res.json(result)
//     })
// })

router.post('/seats', (req, res) => {
    BusComb.find({ 'busNumber': req.body }, (err, result) => {
        if (err) res.send(err)
        else res.json(result)
    })
})











module.exports = router;
