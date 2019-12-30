var express = require("express");
var router = express.Router();
var mysql = require("mysql");

/* GET users listing. */
router.get("/activities", function(req, res, next) {
  console.log("get", req.params);
  res.locals.connection.query("SELECT * from ActionVO", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.send(JSON.stringify(results));
    //res.json({"Error" : false, "Message" : results, "req" : req.body});
  });
});

/* GET users listing. */
router.get("/activity/:id", function(req, res, next) {
  res.locals.connection.query(
    "SELECT * from ActionVO where actionId = 1",
    function(error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

router.put("/activity/:id", function(req, res, next) {
  console.log("update", req.params);
  var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
  var table = ["ActionVO", "name", req.body.name, "actionId", req.params.id];
  query = mysql.format(query, table);
  res.locals.connection.query(query, function(error, results, fields) {
    if (error) {
      res.json({ Error: true, Message: error, req: req.body });
    } else {
      console.log("update", results);
      res.locals.connection.query(
        "SELECT * from ActionVO where actionId = " + req.params.id,
        function(error, results, fields) {
          if (error) res.json({ Error: true, Message: error, req: req.body });
          res.json(results);
        }
      );
    }
  });
});

/* DELETE users  */
router.delete("/activity/:id", function(req, res, next) {
  var query = "DELETE from ?? WHERE ??=?";
  var table = ["ActionVO", "actionId", req.params.id];
  console.log("delete", req.params.id);
  query = mysql.format(query, table);
  res.locals.connection.query(query, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error executing MySQL query" });
    } else {
      res.json({
        Error: false,
        Message: "Deleted the ActionVO with actionId " + req.params.actionId
      });
    }
  });
});

//create user, POST request
router.post("/activity/create", function(req, res, next) {
  var query = "INSERT INTO ActionVO (??) VALUES (?)";
  var table = ["name", req.body.name];
  query = mysql.format(query, table);
  console.log("create  " +  query);
  res.locals.connection.query(query, function(error, results, fields) {
    if (error) {
	  res.status(500).send({ Error: true, Message: error, req: req.body });
	  console.log("create error " +  error);
    } else {
      var query = "SELECT LAST_INSERT_ID() ";
      res.locals.connection.query(query, function(error, results, fields) {
        if (error) {
		  res.status(500).json({ Error: true, Message: error, req: req.body });
		  console.log("create error " +  error);
        } else {
          console.log("create", results);
          res.locals.connection.query(
            "SELECT * from ActionVO where actionId = " +
              results[0]["LAST_INSERT_ID()"],
			  
            function(error, results, fields) {
				 if (error) {
					  res.status(500).json({ Error: true, Message: error, req: req.body });
					  console.log("create error " +  error);
				 } else {
					 
console.log("create activity results", results);						 
					 res.json(results);
				 }
            }
          );
        }
      });
    }
  });
});

/* GET users listing. */
router.get("/clients", function(req, res, next) {
  console.log("get", req.params);
  res.locals.connection.query("SELECT * from ClientVO", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.send(JSON.stringify(results));
    //res.json({"Error" : false, "Message" : results, "req" : req.body});
  });
});

router.get("/client/:id", function(req, res, next) {
  res.locals.connection.query(
    "SELECT * from ClientVO where clientId = " + req.params.id,
    function(error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

router.put("/client/:id", function(req, res, next) {
  console.log("update", req.params);
  console.log("update", req.body.name);
  var value = req.body.name;
  var query =
    "UPDATE ?? SET ?? = ?,  ?? = ?, ?? = ?, ?? = ?, ?? = ?, ?? = ?,?? = ?, ?? = ? WHERE ?? = ?";
  var table = [
    "ClientVO",
    "companyNumber",
    value.companyNumber,
    "companyType",
    value.companyType,
    "address",
    value.address,
    "contactPerson",
    value.contactPerson,
    "email",
    value.email,
    "name",
    value.name,
    "telephone",
    value.telephone,
    "web",
    value.web,
    "clientId",
    req.params.id
  ];
  query = mysql.format(query, table);
  console.log("update", query);
  res.locals.connection.query(query, function(error, results, fields) {
    if (error) {
      res.json({ Error: true, Message: error, req: req.body });
    } else {
      console.log("update result", results);
      res.locals.connection.query(
        "SELECT * from ClientVO where clientId = " + req.params.id,
        function(error, results, fields) {
          if (error) res.json({ Error: true, Message: error, req: req.body });
          res.json(results);
        }
      );
    }
  });
});

//create user, POST request
router.post("/client/create", function(req, res, next) {
  console.log("add", req.params);
  console.log("add", req.body.name);
  var value = req.body.name;
  var query = "INSERT INTO ClientVO SET ?";
  var table = {
    companyNumber: value.companyNumber,
    companyType: value.companyType,
    address: value.address,
    contactPerson: value.contactPerson,
    email: value.email,
    name: value.name,
    telephone: value.telephone,
    web: value.web
  };
  query = mysql.format(query, table);
  console.log("add", query);
  res.locals.connection.query(query, function(error, results, fields) {
    if (error) {
      res.json({ Error: true, Message: error, req: req.body });
    } else {
      var query = "SELECT LAST_INSERT_ID() ";
      res.locals.connection.query(query, function(error, results, fields) {
        if (error) {
          res.json({ Error: true, Message: error, req: req.body });
        } else {
          console.log("create", results);
          res.locals.connection.query(
            "SELECT * from ClientVO where clientId = " +
              results[0]["LAST_INSERT_ID()"],
            function(error, results, fields) {
console.log("create client results", results);				
              if (error)
                res.json({ Error: true, Message: error, req: req.body });
              res.json(results);
            }
          );
        }
      });
    }
  });
});

/* DELETE users  */
router.delete("/client/:id", function(req, res, next) {
  var query = "DELETE from ?? WHERE ??=?";
  var table = ["ClientVO", "clientId", req.params.id];
  console.log("delete", req.params.id);
  query = mysql.format(query, table);
  res.locals.connection.query(query, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error executing MySQL query" });
    } else {
      res.json({
        Error: false,
        Message: "Deleted the ClientVO with clientId " + req.params.clientId
      });
    }
  });
});

module.exports = router;
