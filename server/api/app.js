const express = require("express");
const morgan = require("morgan");
const cors = require('cors')

const {appRouter} = require('./routes/index');


const app = express();





//  Apply the at limiting middleware to API calls only
app.use(express.json()); // deserialization
app.use(cors());
app.use(morgan('combined'))  //ragister entry.


app.use('/api', appRouter)





module.exports ={app};