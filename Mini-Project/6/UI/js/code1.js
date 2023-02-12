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
  
  var sqlquery = "CREATE TABLE UserName (name VARCHAR(255), rollno VARCHAR(255))";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log(result);
    
  });
  
});