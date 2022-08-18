// import {v4 as uuid} from "uuid";
const {uuid} = require('uuidv4');
const db = require("./dbase/db");
// import db from "../controllers/dbase/db.js";




 const getUsers = (req,res)=>{

    // res.send(users);

     // MYSQL CONNECTION
    db.query('SELECT * FROM email_list',(err,result)=>{
      if (err){
        console.log(err);
      }else{
        res.send(result);
      };
    });
   
}


 const getUser = (req,res)=>{
   const singleUserid =  req.body.id;
    

    // MYSQL CONNECTION
                         
    db.query(`SELECT * FROM email_list WHERE id =${singleUserid}`,
      (err,result)=>{
          if (err){
            console.log(err);
          }else{
            res.send(result);
          }
          
        
          });
    }
 const createUsers = (req,res)=>{
    
    const email = req.body.email;
    
    // users.push({...user, id: uuid()});
    // res.send("User email added successfully");
    // 
    
    db.query('INSERT INTO email_list (email) VALUES(?)',
    
    [email], (err,result)=>{
        
      if (err){
        console.log(err);
      }else{

        res.send('Value Inserted');
       
      }

    }
    
    );

}


 const deleteUser = (req,res)=>{

 const  del_user =  req.params.id;
   

    db.query(`DELETE FROM email_list WHERE id =${del_user}`,

    (err,result)=>{
      if (err){
        console.log(err);
      }else{
        // res.send(result);
        res.send("User delete successfully");
      }
    }
    )
}

 const updateUser = (req,res)=>{
 
   const updateUser_email = req.body.email;

   db.query(
     ` UPDATE email_list
     SET  email = ${updateUser_email} WHERE id=${updateUser}`,
     (err,result)=>{
      if (err){
        console.log(err);
      }else{
        res.send(result);
      }
    }
    
    
   )
    res.send("User updated successfully");
}
module.exports = {getUsers, createUsers, getUser, deleteUser, updateUser};
