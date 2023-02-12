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
  
  var sqlquery = "CREATE TABLE `personal_profile_data` (  `passport_id` int NOT NULL,  `DOB` date NOT NULL,  `country` varchar(255) NOT NULL,  `First_Name` varchar(255) NOT NULL,  `Last_Name` varchar(255) NOT NULL,  `Middle_Name` varchar(255) NOT NULL,  `Gender` char(1) NOT NULL,  `Age` int NOT NULL,  `Address` varchar(255) NOT NULL,  `Contact` int NOT NULL,  `UserName` varchar(255) NOT NULL,  PRIMARY KEY (`passport_id`),  KEY `UserName` (`UserName`),  CONSTRAINT `personal_profile_data_ibfk_1` FOREIGN KEY (`UserName`) REFERENCES `accont_credentials` (`UserName`),  CONSTRAINT `personal_profile_data_ibfk_2` FOREIGN KEY (`UserName`) REFERENCES `extra_user_data` (`UserName`))"
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log(result);
    
  });
  var sqlquery = " select * from personal_profile_data";
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log(result);
    
  });
  
});