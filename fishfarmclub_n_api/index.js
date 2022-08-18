
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const http = require("http");
const bodyParser = require ("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
// const userRoutes = require("./routes/users");
const useRoutes = require('./controllers/users');
const config = require("./config");


const {getUsers, createUsers, getUser, deleteUser, updateUser} = useRoutes;
// const router = express.Router();

const {port, allowedDomains} = config;

const app = express();

// app.use(cors({origin: allowedDomains}));

app.use(helmet());

app.use(compression());
// app.use(Router());


const corsOptions ={
    origin:allowedDomains, // COMMENTED ON 11 /08/2022  UNCOMMENTED ON 16 /08/2022
  credentials:true,            //access-control-allow-credentials:true COMMENTED ON 11 /08/2022  UNCOMMENTED ON 16 /08/2022
   optionSuccessStatus:200   //  COMMENTED ON 11 /08/2022  UNCOMMENTED ON 16 /08/2022

}
app.use(cors(corsOptions)); // COMMENTED ON 11 /08/2022  UNCOMMENTED ON 16 /08/2022

app.use(express.json());    //COMMENTED ON 11 /08/2022   UNCOMMENTED ON 16 /08/2022
// const port = 5100;         // COMMENTED ON 11 /08/2022   UNCOMMENTED ON 16 /08/2022
app.use(bodyParser.json()); //COMMENTED BEFORE 08/08/2022 UNCOMMENTED ON 16 /08/2022


app.get('/', (req,res)=>{
    return res.send('Praise The Lord Jesus');
}  );

// app.use("/", userRoutes);    

const server = http.createServer(app);

server.listen(port, () =>{
    console.log(`Server is up and running on port ${port}`);

});


app.get("/users",getUsers);
app.post("/",createUsers);
app.get("/user/:id",getUser);
app.delete("/user/:id",deleteUser);
app.put("/user/:id",updateUser);

//import express from 'express';
//import bodyParser from "body-parser";
//import cors from "cors";
// import db  from "./controllers/dbase/db.js";
//import userRoutes from "./routes/users.js";

// NEW VARIABLES BELOW CREATED ON 08/08/2022 
//const app = express();  (OLD VARIABLE COMMENTED ON 08/08/2022)
// app.use(cors());       (COMMENTED BEFORE 08/08/2022)



//  const corsOptions ={
//      origin:allowedDomains, // COMMENTED ON 11 /08/2022  COMMENTED ON 16 /08/2022
//    credentials:true,            //access-control-allow-credentials:true COMMENTED ON 11 /08/2022  COMMENTED ON 16 /08/2022
//     optionSuccessStatus:200   //  COMMENTED ON 11 /08/2022  COMMENTED ON 16 /08/2022
 
//  }
// app.use(cors(corsOptions)); // COMMENTED ON 11 /08/2022  COMMENTED ON 16 /08/2022

//  app.use(express.json());    //COMMENTED ON 11 /08/2022   COMMENTED ON 16 /08/2022
// // const port = 5100;         // COMMENTED ON 11 /08/2022   COMMENTED ON 16 /08/2022
// app.use(bodyParser.json()); //COMMENTED BEFORE 08/08/2022 COMMENTED ON 16 /08/2022


// app.get("/",(req,res)=> res.send("Hello Brethren")); COMMENTED BEFORE 08/08/2022


// app.use("/", userRoutes);                                             /* COMMENTED ON 11/08/2022  */
// app.listen(port,()=>
//  console.log(`Server is listening on port: http://localhost:${port}`)  /* COMMENTED ON 11/08/2022  */
 
//  );
// app.all("*",(req,res)=>res.send("This route does not exist"));   /* COMMENTED ON 11/08/2022  */
