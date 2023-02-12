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
  
  var sqlquery = "CREATE TABLE `booking_details` (  `Booking_id` int NOT NULL,  `departure_date` date NOT NULL,  `arival_date` date NOT NULL,  `booking_status` varchar(255) NOT NULL,  `ticket_cost` double(8,2) NOT NULL,  `from` varchar(255) NOT NULL,  `to` varchar(255) NOT NULL,  PRIMARY KEY (`Booking_id`))"
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log(result);
    
  });
  var sqlquery = " select * from booking_details";
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log(result);
    
  });
  
});