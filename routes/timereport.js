
var express = require('express');
var router = express.Router();
var mysql = require("mysql");

/* GET users listing. */
router.get('/activities', function(req, res, next) {
 	res.locals.connection.query('SELECT * from ActionVO', function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
        //res.json({"Error" : false, "Message" : results, "req" : req.body});
	});
});

/* GET users listing. */
router.get('/activities/:id', function(req, res, next) {
 	res.locals.connection.query('SELECT * from ActionVO where actionId = 1' , function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

/* DELETE users  */
router.delete('/activities/:id', function(req, res, next) {
        var query = "DELETE from ?? WHERE ??=?";
        var table = ["ActionVO","actionId",req.params.actionId];
        query = mysql.format(query,table);
        res.locals.connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Deleted the ActionVO with actionId "+req.params.actionId});
            }
        });
    });


router.post('/activities/new', function(req, res, next) {
  res.locals.connection.query("insert into ActionVO(name) values('"+req.body.name+ "')", function (error, results, fields) {

        if(error) throw error;
		//res.send(JSON.stringify(results));
        res.json({"Error" : false, "Message" : results, "req" : req.body});
    });
});

    //create user, POST request
    router.post("/activities/create",function(req,res, next){
  
        var query = "INSERT INTO ActionVO (??) VALUES (?)";
        var table = ["name",req.body.name];
        query = mysql.format(query,table);
        res.locals.connection.query(query,function(error, results, fields){
            if(error) {
                res.json({"Error" : true, "Message" : error, "req" : req.body});
            } else {
                res.json({"Error" : false, "Message" : "ActionVO created !", "req" : req.body});
            }
        });
    });

module.exports = router;