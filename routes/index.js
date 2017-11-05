var express = require('express');
var router = express.Router();
var request = require('request');

var db = [];
/* GET home page. */
router.get('/', function (req, res, next) {

  // Rendering the index view with the title 'Sign Up'
  res.redirect('/userlist');
});

/* GET userlist*/
router.get('/userlist', function (req, res, next) {
		var options = {
	    url: 'http://localhost:8080/volunteers',
	    method: 'GET'
	    }
	request.get(options,
	    function (error, response, body) {
	        if (!error && response.statusCode == 200) {
	        	db = JSON.parse(body);
	        }
	    }
	);
	res.render('userlist', db);
});


router.post('/signup', function (req, res, next){
  res.render('adduser', {title: 'Sign Up'});
});

/* POST to adduser */
router.post('/adduser', function (req, res, next) {

	// Catching variables passed in the form
	var firstName = req.body.firstname;
	var lastName = req.body.lastname;
	var email = req.body.email;
	var age = req.body.age;

	// Adding the new entry to the db
	newUser = {"firstName": firstName, "lastName": lastName, "email": email, "age": age};
	var options = {
	    url: 'http://localhost:8080/volunteers',
	    method: 'POST',
	    json: newUser
		}

	request.post(options,

	    function (error, response, body) {
	        if (!error && response.statusCode == 200) {
	            console.log(body)
	        }
	    }
	);
	// redirect to the original page
	res.redirect('/userlist');
});




module.exports = router;
