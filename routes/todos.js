
var express = require('express');
var router = express.Router();
var mysql = require("mysql");

/* GET todos listing. */
router.get('/', function(req, res, next) {
 	res.locals.connection.query('SELECT * from todos', function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
        //res.json({"Error" : false, "Message" : results, "req" : req.body});
	});
});

/* GET todo . */
router.get('/:id', function(req, res, next) {
 	res.locals.connection.query('SELECT * from todos where id = 1' , function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

//create todo, POST request
router.post('/new', function(req, res, next) {
  res.locals.connection.query("insert into todos(text,completed) values('"+req.body.text+ "',"+req.body.completed+")", function (error, results, fields) {

        if(error) throw error;
		//res.send(JSON.stringify(results));
        res.json({"Error" : false, "Message" : results, "req" : req.body});
    });
});

/* DELETE todos  */
router.delete('/', function(req, res, next) {
  res.locals.connection.query("delete from todos", function (error, results, fields) {

        if(error) throw error;
		//res.send(JSON.stringify(results));
        res.json({"Error" : false, "Message" : results, "req" : req.body});
    });
});

    //Update todo, PUT request
router.put("/:id", function(req, res, next) {
	  console.log("Update", req.body);
	 console.log("Update", req.params);
		  res.locals.connection.query("UPDATE todos SET completed = !completed WHERE id =" +req.params.id, function (error, results, fields) {	
            if(error) {
                res.json({"Error" : true, "Message" : error, "req" : req.body});
            } else {
                res.json({"Error" : false, "Message" : "Todos created !", "req" : req.body});
            }
        });
    });

module.exports = router;