
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const helmet = require("helmet");

//import express from 'express';
//import bodyParser from "body-parser";
//import cors from "cors";
// import db  from "./controllers/dbase/db.js";
//import userRoutes from "./routes/users.js";

// NEW VARIABLES BELOW CREATED ON 08/08/2022 
//const app = express();  (OLD VARIABLE COMMENTED ON 08/08/2022)
// app.use(cors());       (COMMENTED BEFORE 08/08/2022)



// const corsOptions ={
    // origin:'http://localhost:3000', // COMMENTED ON 11 /08/2022
//     credentials:true,            //access-control-allow-credentials:true COMMENTED ON 11 /08/2022
//     optionSuccessStatus:200     COMMENTED ON 11 /08/2022
// }
// app.use(cors(corsOptions));  COMMENTED ON 11 /08/2022
// app.use(express.json());    COMMENTED ON 11 /08/2022
// const port = 5100;          COMMENTED ON 11 /08/2022
// app.use(bodyParser.json()); COMMENTED BEFORE 08/08/2022


// app.get("/",(req,res)=> res.send("Hello Brethren")); COMMENTED BEFORE 08/08/2022


// app.use("/", userRoutes);                                             /* COMMENTED ON 11/08/2022  */
// app.listen(port,()=>
//  console.log(`Server is listening on port: http://localhost:${port}`)  /* COMMENTED ON 11/08/2022  */
 
//  );
// app.all("*",(req,res)=>res.send("This route does not exist"));   /* COMMENTED ON 11/08/2022  */
