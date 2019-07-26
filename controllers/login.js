var express = require('express');
var user = require.main.require('./models/user-model');
var router = express.Router();

//ROUTES
router.get('/', function (req, res) {
    res.render('login/index');

});

router.post('/', function (req, res) {


    var data = {
        email: req.body.email,
        password: req.body.password,

    };
    user.login(data, function (status, results) {
        if (status) {
        	user.getStatusByEmail(data,function(result){
        		if(result){
        			if(result[0].status == 1){
                        req.session.email = req.body.email;
                        req.session.status = result[0].status;
                        res.redirect('/adminhome');
        			}else{
                        req.session.email = req.body.email;
                          req.session.status = result[0].status;
                        res.redirect('/moderatorhome');
                    }
        		}
        	});
            
        } else {
            var massage = "Username or password error";
            res.render('login/index', {
                error: massage
            });
        }
    });
});
module.exports = router;