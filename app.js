//DEC
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var login = require('./controllers/login');
var logout = require('./controllers/logout');
var home = require('./controllers/home');
var adminhome = require('./controllers/adminhome');
var moderator = require('./controllers/moderatorhome');
var content = require('./controllers/content');
var request = require('./controllers/request');
var register = require('./controllers/register');
var exValidator = require('express-validator');
var app = express();


//CONFIG
app.set('view engine', 'ejs');



//MIDDLEWARE
app.use(bodyParser.urlencoded({
    'extended': false
}));
app.use(exValidator());
app.use(expressSession({
    secret: 'my top secret password',
    saveUninitialized: true,
    resave: false
}));
app.use(express.static('Public'));


app.use('/login', login);
app.use('/logout', logout);
app.use('/home', home);
app.use('/adminhome', adminhome);
app.use('/moderatorhome', moderator);
app.use('/content', content);
app.use('/request', request);
app.use('/register', register);

//ROUTING
app.get('/', function (req, res) {
    res.send('Welcome to express web server...');
});

//SERVER STARTUP
app.listen(3000, function () {
    console.log('server started at 3000...');
});
