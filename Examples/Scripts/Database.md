# 20CYS202 - User Interface Design ![](https://img.shields.io/badge/-Live-brightgreen)
![](https://img.shields.io/badge/Batch-21CYS-lightgreen) ![](https://img.shields.io/badge/UG-blue) ![](https://img.shields.io/badge/Subject-UID-blue)

20CYS202  - User Interface Design - 3rd Sem - B.E. CSE(CYS) - ASE, CBE

## Database Connectivity using MySQL and Node.js

### Prerequisites

 - [MySQL 8.0 ](https://dev.mysql.com/downloads/mysql/)
    - Install MySQL
    - Configure "username" and "password"
    - Create a database 
 - [Node.js](https://nodejs.org/en/download/)
    - Install
 - NPM
    - Run **_"npm install mysql"_**
    

### Example Codes

 - require includes the npm library **"mysql"**
 - **con** is the connection variable which creates a connection to mysql instance running in _"localhost"_ with _"root"_ as username and _"password"_ as password to
   a database _"demodb"_
 - **sqlquery** variable should have the sql query to be executed
   

#### Create a connection 

```
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "demodb"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
});

```

#### Execute a query

```
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "demodb"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "CREATE TABLE CYS (name VARCHAR(255), rollno VARCHAR(255))";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  
});
```
