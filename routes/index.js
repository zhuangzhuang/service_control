var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Windows服务控制' });
});

router.get('/service/:control/:name', function(req, res){

	var sc = spawn('sc', [req.params.control, req.params.name]);
	sc.stdout.on('data', function(data){
		res.write(data);
	});
	sc.stderr.on('data', function(data){
		res.write(data);
	});
	sc.on('close', function(code){
		res.end();
	})	
});

module.exports = router;
