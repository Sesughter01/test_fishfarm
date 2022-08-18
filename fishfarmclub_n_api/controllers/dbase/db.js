 
// Import the mysql module object
const  mmysql = require('mysql'); 


// Create Database connection
 const db = mmysql.createConnection({
    user:"ashishima01",
    host:"localhost",
    password:"Ashishima11&&",
    database:"fishfarmclub"
  
  })
  module.exports =  db;