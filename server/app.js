const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.listen(process.env.PORT);