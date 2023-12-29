const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//middleware

//routes

//connect to db (asynchronous)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log("connected to db listening on port:", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    })