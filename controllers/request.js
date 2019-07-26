var express = require('express');
var user = require.main.require('./models/user-model');
var router = express.Router();



router.get('*', function (req, res, next) {

    if (req.session.email != null && req.session.status != null) {
        next();
    } else {
        res.redirect('/login');
    }
});

router.get('/', function (req, res) {
        var statu = req.session.status;
user.getAllRequest(function (result) {
res.render('request/index',{req:result, status:statu});
});
    
});
module.exports = router;