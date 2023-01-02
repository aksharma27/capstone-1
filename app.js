const express = require('express');
const dotenv = require('dotenv');
require('dotenv').config({path: 'config.env'});
const PORT = process.env.PORT || 3000;
const dbconn = require('./config/db');


const app = express();

app.use(express.json());
dbconn();

app.get('/health', (req, res)=>{
    req.send("Health Api setup");
});



app.listen(process.env.PORT || 3000, ()=>{
    console.log(`app listening on port ${process.env.PORT}`);
})