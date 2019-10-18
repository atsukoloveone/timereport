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
            "SELECT * from ActionVO where actionId = " +
              results[0]["LAST_INSERT_ID()"],
            function(error, results, fields) {
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
  var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
  var table = [
    "ClientVO",
    "companyNumber",
    req.body.companyNumber,
    "companyType",
    req.body.companyType,
    "address",
    req.body.address,
    "contactPerson",
    req.body.contactPerson,
    "email",
    req.body.email,
    "name",
    req.body.name,
    "telephone",
    req.body.telephone,
    "web",
    req.params.web
  ];
  query = mysql.format(query, table);
  res.locals.connection.query(query, function(error, results, fields) {
    if (error) {
      res.json({ Error: true, Message: error, req: req.body });
    } else {
      console.log("update", results);
      res.locals.connection.query(
        "SELECT * from ClientVO where actionId = " + req.params.id,
        function(error, results, fields) {
          if (error) res.json({ Error: true, Message: error, req: req.body });
          res.json(results);
        }
      );
    }
  });
});
module.exports = router;
