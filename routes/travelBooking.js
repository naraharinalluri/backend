var express = require('express');
var router = express.Router();
var bus = require('../models/Buses');
// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json()


router.get('/', (req, res) => {
    bus.find({ 'companyName': "RED BUS", 'startPoint': "Chennai", 'availableseats': "20" }, 'startPoint endPoint', (err, result) => {
        if (err) res.send(err)
        else res.json({ result })
    })
})

router.post('/', (req, res) => {

    bus.find({ 'startPoint': req.body.text, 'endPoint': req.body.text2 }, (err, result) => {
        if (err) res.send(err)
        else res.json({ result })
    })
    // console.log(req.query.startPoint)
    // res.end();
})
















module.exports = router;
