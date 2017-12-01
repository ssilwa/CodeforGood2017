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
	        	res.render('userlist', {users:db});
	        }
	    }
	);
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
	var background = req.body.background;
	var phone = req.body.phone;
	var address = req.body.address;
	var task = req.body.task;
	var idd = req.body.idd;
	var student = req.body.student;
	var signedup = req.body.signedup;
	var attended = req.body.attended;
	var contacted = req.body.contacted;
	var donated = req.body.donated;
	var transportation = req.body.transportation;
	var other = req.body.other


	// Adding the new entry to the db
	newUser = {"firstName": firstName, "lastName": lastName, "email": email, "background": background, "phone": phone, "address": address, "task": task, "idd": idd, "student": student, "signedup": signedup, "attended": attended, "contacted": contacted, "donated": donated, "transportation": transportation, "other": other};
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


// https://stackoverflow.com/questions/7997627/google-maps-how-to-get-the-distance-between-two-point-in-metre

module.exports = router;
