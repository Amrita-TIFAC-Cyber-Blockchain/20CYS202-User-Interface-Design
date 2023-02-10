function check(){
    var mysql = require('mysql');

    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "welcome123",
    database: "mini_project"
    });

    con.connect(function(err) {

        if (err) throw err;
        console.log("Connected!");
    
    });
}