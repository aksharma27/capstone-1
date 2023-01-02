const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({
    apiName: {
        type: String,
        required:true
    },
    apiDescription: "String",
    apiImageUrl: "String",
    apiLink: {
        type: String,
        required: true
    }
}, 
    {timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"}}
)

const Api = mongoose.model("Api", apiSchema);
module.exports = Api;