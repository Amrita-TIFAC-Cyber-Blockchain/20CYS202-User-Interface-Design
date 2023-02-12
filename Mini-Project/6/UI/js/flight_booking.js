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
  
  var sqlquery = "CREATE TABLE `flight_booking` (  `Booking_id` int NOT NULL,  `Flight_id` int NOT NULL,  UNIQUE KEY `Booking_id` (`Booking_id`),  KEY `Flight_id` (`Flight_id`),  CONSTRAINT `flight_booking_ibfk_1` FOREIGN KEY (`Booking_id`) REFERENCES `booking_details` (`Booking_id`),  CONSTRAINT `flight_booking_ibfk_2` FOREIGN KEY (`Flight_id`) REFERENCES `flight_data` (`Flight_id`))"  
  con.query(sqlquery, function (err, result) {
  
  if (err) throw err;
  console.log(result);
    
  });
  var sqlquery = " select * from flight_booking";
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log(result);
    
  });
  
});