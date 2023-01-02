const mongoose = require('mongoose');
const DB = process.env.DB;


const dbConnect = ()=>{
    mongoose.set("strictQuery", true);

    mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Connect to db successfully");
    }).catch((e)=>{
        console.log("ERROR: " + e);
    });
}

module.exports = dbConnect;