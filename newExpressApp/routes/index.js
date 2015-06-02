var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res) {
	res.render('index', {
		title: 'Express App',
		desc: 'new visualization Application to analyze your application events'
	});

});


module.exports = router;
