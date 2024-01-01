require('dotenv').config();

const {app} = require("./api/app");
const {mongodb_connection } = require("./api/db/mongo")



const PORT = process.env.PORT;

mongodb_connection();



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})