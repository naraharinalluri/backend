var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var User = require('./models/User')
const bodyParser = require('body-parser');
var app = express();


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
// var loginRouter = require('./routes/login');
// require('./auth/auth');

// app.use(bodyParser.urlencoded({ extended: false }));


// require('./routes/auth')
// const routes = require('./routes/routes')
// app.use('/', routes);

//DB Config
const DB_URL = require('./config/keys').MongoURI;

//connect to mongo
//---------------------------------------------
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(err => {
        throw err
    })
//---------------------------------------------
// const secureRoute = require('./routes/login')
require('./auth/auth');

app.use(bodyParser.urlencoded({ extended: false }));
const routes = require('./routes/routes')
app.use('/', routes);
const secureRoute = require('./routes/secure-routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', passport.authenticate('jwt', { session: false }), secureRoute);
// app.use('/', routes);

// app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);
// app.use('/login', loginRouter);

module.exports = app;
