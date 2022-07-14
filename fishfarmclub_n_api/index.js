import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
// import db  from "./controllers/dbase/db.js";
import userRoutes from "./routes/users.js";


const app = express();
// app.use(cors());
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
const port = 5100;
// app.use(bodyParser.json());


// app.get("/",(req,res)=> res.send("Hello Brethren"));

app.use("/", userRoutes);
app.listen(port,()=>
 console.log(`Server is listening on port: http://localhost:${port}`)
 
 );
app.all("*",(req,res)=>res.send("This route does not exist"));
