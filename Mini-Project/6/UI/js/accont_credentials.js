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
  
  var sqlquery = " CREATE TABLE `accont_credentials` (`UserName` varchar(255) NOT NULL,`Password` varchar(255) NOT NULL, PRIMARY KEY (`UserName`) )";
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log(result);
    
  });
  var sqlquery = " select * from accont_credentials";
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log(result);
    
  });
  
});