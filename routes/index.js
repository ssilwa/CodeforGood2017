var express = require('express');
var router = express.Router();

var db = [{"firstName" : "Pusheen", "lastName": "Meow", "email" : "pm@mit.edu", "age": "3"},
		{"firstName" : "Sandeep", "lastName": "Silwal", "email" : "ss@mit.edu", "age": "10"}];

/* GET home page. */
router.get('/', function (req, res, next) {

  // Rendering the index view with the title 'Sign Up'
  res.redirect('/userlist');
});

/* GET userlist*/
router.get('/userlist', function (req, res, next) {
  res.render('userlist', {users:db});

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
	newUser = {"firstName": firstName, "lastname": lastName, "email": email, "age": age};
	db.push(newUser);

	// redirect to the original page
	res.redirect('/userlist');
});




module.exports = router;
