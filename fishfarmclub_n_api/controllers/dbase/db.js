 
// Import the mysql module object
import  mmysql from 'mysql'; 


// Create Database connection
 const db = mmysql.createConnection({
    user:"ashishima01",
    host:"localhost",
    password:"Ashishima11&&",
    database:"fishfarmclub"
  
  })
  export default db;