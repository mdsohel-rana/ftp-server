var express = require('express');
var user = require.main.require('./models/user-model');
var router = express.Router();



router.get('*', function (req, res, next) {

    if (req.session.email != null) {
        next();
    } else {
        res.redirect('/login');
    }
});

router.get('/', function (req, res) {


    res.render('content/index',{status:req.session.status});
});
router.get('/add', function (req, res) {

    res.render('content/addcontent');

});
router.post('/add', function (req, res) {

    var data = {
        category:req.body.category,
        subcategory:req.body.subcategory,
        name:req.body.name,
        dwnldlink: req.body.dwnldlink,
        releasedate:req.body.releasedate

    };
    user.addContent(data, function (status) {
           console.log(status);
        if (status) {
            res.redirect('/content');
        } else {
            res.redirect('/content/add');
        }

    });
});
router.get('/edit', function (req, res) {
    user.getContent( function (result) {

        if (result != null) {
            res.render('content/editcontent', {
                content: result
            });
        } else {
            res.send('Error!.. try again...');
        }
    });
});
router.get('/delete/:id', function (req, res) {

    user.deleteContent(req.params.id, function (status) {
        if (status) {
            res.redirect('/content/edit');
        } else {
            res.send('Error!.. try again...');
        }
    });
});
module.exports = router;