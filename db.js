const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
});

db.connect((err)=>{
    if(err){
        console.log("Error in connecting Database");
    }
    else{
        console.log("Database Connected");
    }
});

module.exports = db;
