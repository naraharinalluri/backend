var express = require('express');
var router = express.Router();
var User = require('../models/User')
var bcrypt = require('bcrypt');
var moment = require('moment');
var bodyParser = require('body-parser')




router.get('/', (req, res) => {
    res.send("Register Here")
});

//Body-Parser
var jsonParser = bodyParser.json()

router.post('/', jsonParser, async (req, res) => {
    //Hash Password 
    const hashPassword = await bcrypt.hash(req.body.password, 10)


    let user = {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        mobile: req.body.mobile,
        gender: req.body.gender,
        dob: moment(req.body.dob).format('YYYY-MM-DD')
    }
    let newUser = new User(user)
    // console.log(newUser)
    newUser.save((err, reslut) => {
        if (err) console.log(err)
        else res.status(201).json(reslut)
    })

    // passport.use('signup', new localStrategy({
    //     usernameField: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password,
    //     mobile: req.body.mobile,
    //     gender: req.body.gender,
    //     dob: moment(req.body.dob).format('YYYY-MM-DD')
    // }, async (name, email, password, mobile, gender, dob, done) => {
    //     try {
    //         //Save the information provided by the user to the the database
    //         const user = await UserModel.create({ name, email, password, mobile, gender, dob });
    //         //Send the user information to the next middleware
    //         return done(null, user);
    //     } catch (error) {
    //         res.send(error);
    //     }
    // }));

});



module.exports = router;
