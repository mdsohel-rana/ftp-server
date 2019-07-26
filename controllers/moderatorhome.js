var express = require('express');
var user = require.main.require('./models/user-model');
var router = express.Router();



router.get('*', function (req, res, next) {

    if (req.session.email != null && req.session.status == 2) {
        next();
    } else {
        res.redirect('/login');
    }
});

router.get('/', function (req, res) {


    res.render('moderatorhome/index');
});
router.get('/profile', function (req, res) {

    user.getProfile(req.session.email, function (results) {
        res.render('moderatorhome/profile', {
            info: results
        });
    });



});
router.post('/profile', function (req, res) {

    var data = {
        id: req.body.id,
        name: req.body.username,

    };
    user.updateProfile(data, function (status) {

        if (status) {
            res.redirect('/moderatorhome');
        } else {
            res.redirect('/moderatorhome');
        }

    });
});
module.exports = router;