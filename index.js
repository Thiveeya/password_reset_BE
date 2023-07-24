// const express=require('express');
// require('dotenv').config()

// const cors=require('cors');

// const Routes=require('./Routes/user')
// const Authentication=require('./Authentication/userAuth')
// //port
// const port = process.env.PORT

// // initiating server
// const app = express();

// // middle ware
// app.use(express.json());
// app.use(cors());
// app.use(Routes);
// app.use(Authentication);
// // application middleware
// app.use("/user", userRouter);
// app.use("/userall", getAllUser);
// app.use("/home", isAuthenticated, authorizeLogin);


// // intial landing page
// app.get("/", (req, res) => {
//     res.send("password reset API working good");
// })

// // listen and start http server in localhost
// app.listen(port, () => {
//     console.log(`Server connected in Localhost:${port}`);
// })

import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
import { authorizeLogin, getAllUser, userRouter } from "./Routes/user.js";
import { isAuthenticated } from "./Authentication/userAuth.js";


//port
const port = process.env.PORT

// initiating server
const app = express();

// middle ware
app.use(express.json());
app.use(cors());

// application middleware
app.use("/user", userRouter);
app.use("/userall", getAllUser);
app.use("/home", isAuthenticated, authorizeLogin);


// intial landing page
app.get("/", (req, res) => {
    res.send("password reset API working good");
})

// listen and start http server in localhost
app.listen(port, () => {
    console.log(`Server connected in Localhost:${port}`);
})