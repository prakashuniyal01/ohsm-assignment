const mongoose = require('mongoose');
const { error } = require('winston');



const   mongodb_connection = async()=>{
    const URL = process.env.MONGO_URL;
    mongoose.connect(URL).then(()=>{
        console.log("Mongodb connected successfully");
    }).catch(err =>{
        error(`Error connecting to Mongodb: ${err}`);
        process.exit(1);
    })
}


module.exports = {  mongodb_connection};