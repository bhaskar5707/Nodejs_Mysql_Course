var mysql = require('mysql');

// Create A Connection
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password:"",
	database:"nodemysql",
})

// Connect To Mysql
con.connect(function(err){
	if(err) throw err;
	console.log("Connected to the database");
     
    // Create Table
    var sql = "DELETE FROM customers WHERE id = 10";
    con.query(sql, function(err, result){
    	if(err) throw err;
    	console.log(result);
    })
});