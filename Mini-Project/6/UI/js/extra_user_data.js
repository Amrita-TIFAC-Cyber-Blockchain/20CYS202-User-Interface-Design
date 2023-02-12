var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "flight"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "CREATE TABLE `extra_user_data` (  `UserName` varchar(255) NOT NULL,  `Blood_Type` varchar(255) DEFAULT NULL,  `Meal_Prefarance` varchar(255) DEFAULT NULL,  `Seat_Preference` varchar(255) DEFAULT NULL,  `Pet` char(255) DEFAULT NULL,  PRIMARY KEY (`UserName`))"
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log(result);
    
  });
  var sqlquery = " select * from passenger_ticket_details";
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log(result);
    
  });
  
});