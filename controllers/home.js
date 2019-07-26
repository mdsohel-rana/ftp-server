var express = require('express');
var user = require.main.require('./models/user-model');
var router = express.Router();


router.get('/', function(req, res){		
		res.render('home/index');
});

router.get('/movies', function(req, res){

	user.getAllMovies(function(results){

		if(results != null){
			res.render('home/movies', {movieList: results});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});
router.get('/webseries', function (req, res) {

	user.getAllSeries(function (results) {

		if (results != null) {
			res.render('home/webseries', {
				seriesList: results
			});
		} else {
			res.send('Error!.. try again...');
		}
	});
});

router.get('/edit/:id', function(req, res){

	user.getById(req.params.id, function(result){

		if(result != null){
			res.render('home/edit', {user: result[0]});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.post('/edit/:id', function(req, res){
	
	var data = {
		username: req.body.uname,
		password: req.body.password,
		id: req.params.id
	}
	user.update(data, function(status){

		if(status){
			res.redirect('/home/user_list');			
		}else{
			res.redirect('/home/edit/'+req.params.id);
		}

	});
});
router.post('/', function (req, res) {

	var data = {
		category: req.body.category,
		subcategory: req.body.subcategory,
		name: req.body.name
	}
	user.request(data, function (status) {

		if (status) {
			var requset="Succesfully requested";
			res.render('home',{req:requset});
		} else {
			var requset = "Request Failed";
			res.render('home', {
				req: requset
			});
		}

	});
});


router.get('/home/delete', function(req, res){

	var sql = "select * from user";

	db.getResult(sql, function(results){

		if(results != null){
			res.render('home/userList', {userList: results});			
		}else{
			res.send('Error!.. try again...');
		}

	});
});

module.exports = router;