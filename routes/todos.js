
var express = require('express');
var router = express.Router();
var mysql = require("mysql");

/* GET users listing. */
router.get('/', function(req, res, next) {
 	res.locals.connection.query('SELECT * from todos', function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
        //res.json({"Error" : false, "Message" : results, "req" : req.body});
	});
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
 	res.locals.connection.query('SELECT * from todos where id = 1' , function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

router.post('/new', function(req, res, next) {
  res.locals.connection.query("insert into todos(text,completed) values('"+req.body.text+ "',"+req.body.completed+")", function (error, results, fields) {

        if(error) throw error;
		//res.send(JSON.stringify(results));
        res.json({"Error" : false, "Message" : results, "req" : req.body});
    });
});

    //create user, POST request
    router.post("/create",function(req,res, next){
  
        var query = "INSERT INTO todos (??,??) VALUES (?,?)";
        var table = ["text","completed",req.body.text,req.body.completed];
        query = mysql.format(query,table);
        res.locals.connection.query(query,function(error, results, fields){
            if(error) {
                res.json({"Error" : true, "Message" : error, "req" : req.body});
            } else {
                res.json({"Error" : false, "Message" : "Todos created !", "req" : req.body});
            }
        });
    });

module.exports = router;