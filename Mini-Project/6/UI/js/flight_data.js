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
  
  var sqlquery = "CREATE TABLE `flight_data` (  `Flight_id` int NOT NULL,  `To` varchar(255) NOT NULL,  `From` varchar(255) NOT NULL,  `Flight_date` date NOT NULL,  `Flight_Name` varchar(255) NOT NULL,  PRIMARY KEY (`Flight_id`))"
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