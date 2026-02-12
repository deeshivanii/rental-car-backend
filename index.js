const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const userRoute = require('./rotues/user');
const connection = require('./connection');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userRoute); 

module.exports = app;