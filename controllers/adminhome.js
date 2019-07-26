var express = require('express');
var user = require.main.require('./models/user-model');
var router = express.Router();



router.get('*', function (req, res, next) {

	if (req.session.email != null && req.session.status == 1) {
		next();
	} else {
		res.redirect('/login');
	}
});

router.get('/', function (req, res) {


	res.render('adminhome/index');
});


router.get('/add', function (req, res) {


	res.render('adminhome/addmoderator');

});
router.get('/profile', function (req, res) {

    user.getProfile(req.session.email,function(results){
       res.render('adminhome/profile', {
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
			res.redirect('/adminhome');
		} else {
			res.redirect('/adminhome');
		}

	});
});
router.get('/edit', function (req, res) {
	var status = 2;
	user.getById(status, function (result) {

		if (result != null) {
			res.render('adminhome/editmoderator', {
				userList: result
			});
		} else {
			res.send('Error!.. try again...');
		}
	});
});

router.post('/add', function (req, res) {

	var data = {
		status: req.body.position,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,

	};
	user.register(data, function (status) {

		if (status) {
			res.redirect('/adminhome');
		} else {
			res.redirect('/adminhome');
		}

	});
});

router.get('/delete/:id', function (req, res) {

	user.deleteModerator(req.params.id, function (status) {
		if (status) {
			res.redirect('/adminhome/edit');
		} else {
			res.send('Error!.. try again...');
		}
	});
});

module.exports = router;