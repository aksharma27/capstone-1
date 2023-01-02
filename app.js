const express = require('express');
const dotenv = require('dotenv');
dotenv.config = ({path: "./config.env"});
const PORT = process.env.PORT || 3000;
const DB = process.env.DB;


const app = express();



app.listen(process.env.PORT || 3000, ()=>{
    console.log(`app listening on port ${process.env.PORT}`);
})