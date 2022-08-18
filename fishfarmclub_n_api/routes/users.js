//  import express from "express";
const express = require("express");
//  import  {getUsers, createUsers, getUser, deleteUser, updateUser} from "../controllers/users.js";
const {getUsers, createUsers, getUser, deleteUser, updateUser} = require('../controllers/users');

 const router = express.Router();

 router.get("/users",getUsers);
 router.post("/user",createUsers);
 router.get("/user/:id",getUser);
 router.delete("/user/:id",deleteUser);
 router.put("/user/:id",updateUser);

 export default router;