var express = require('express');
var user = require.main.require('./models/user-model');
var router = express.Router();

//ROUTES
router.get('/', function (req, res) {
    res.render('register/index');

});

router.post('/', function (req, res) {

    var data = {
        status: req.body.position,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,

    };
    req.checkBody('username', 'Username field cannot be empty.').notEmpty();
    req.checkBody('email', 'Email field cannot be empty.').notEmpty();
    req.checkBody('password', 'Password field cannot be empty.').notEmpty();
    req.checkBody('email', 'Please use a valid email.').isEmail();
    req.checkBody('password', 'Password must be between 8-60 characters long.').len(8, 60);
    req.checkBody("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");

    const err = req.validationErrors();

    if (err) {
        res.render('register/index', {

            errors: err

        });
    } else {
        user.checkEmail(data.email, function (status) {
            console.log(status);
            if (status) {
                user.register(data, function (status) {
                    var succsess = "You can login now";
                    res.render('register/index', {
                        sucess: succsess
                    });

                });
            }else{
                var exis = "Email is already in the database";
                res.render('register/index', {
                    exist: exis
                });

            }

        });

    }



});

module.exports = router;