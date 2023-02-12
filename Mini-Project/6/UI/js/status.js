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
  
  var sqlquery = "CREATE TABLE `status` (  `ticket_id` int NOT NULL,  `Booking_id` int NOT NULL,  UNIQUE KEY `Booking_id` (`Booking_id`),  KEY `ticket_id` (`ticket_id`),  CONSTRAINT `status_ibfk_1` FOREIGN KEY (`Booking_id`) REFERENCES `booking_details` (`Booking_id`),  CONSTRAINT `status_ibfk_2` FOREIGN KEY (`ticket_id`) REFERENCES `passenger_ticket_details` (`ticket_id`))"

  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log(result);
    
  });
  var sqlquery = " select * from status";
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log(result);
    
  });
  
});