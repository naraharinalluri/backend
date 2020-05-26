var express = require('express');
var router = express.Router();
var User = require('../models/User')



router.get('/', function (req, res, next) {
  let email = req.query.email
  User.findOne({ email }, (err, result) => {
    if (err) res.json(err)
    else res.json(result)
  })
  console.log(email)
});


module.exports = router;
