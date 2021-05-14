const mysql = require('mysql2');   

const pool = mysql.createPool({  
    host:'10.2.3.68',       
    user:'developer',    
    password:'P@ssw0rd@2021',  
    database:'db_grab_devsit',  
   // port: '3306',
    
 
});

module.exports = pool.promise();       