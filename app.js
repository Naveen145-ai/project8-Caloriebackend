const express = require('express');

const app = express();
const path = require('path');
const dotenv = require('dotenv');
const connectDatabase = require('./config/connectDatabase');
dotenv.config({path: path.join(__dirname,'config','config.env')});

connectDatabase();
app.listen(process.env.PORT, ()=>{
    console.log('Server is running in the port 8080');
    
})