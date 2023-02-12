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
  
  var sqlquery = "CREATE TABLE `passenger_ticket_details` (  `ticket_id` int NOT NULL,  `flight_date` int NOT NULL,  `flight_name` int NOT NULL,  `class` int NOT NULL,  `to` int NOT NULL,  `from` int NOT NULL,  `seat_no` int NOT NULL,  PRIMARY KEY (`ticket_id`))"
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