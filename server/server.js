const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port:", process.env.PORT);
});