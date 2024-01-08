const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const discRoutes = require('./routes/discRoutes');

const app = express();

//middleware
app.use(express.json());

//Enable CORS
app.use(cors());

//routes
app.use('/api/discs', discRoutes);

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