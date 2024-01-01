const mongoose = require('mongoose')
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/Auth_Assignment"

const connectToDB = async () =>{
    mongoose.connect(DB_URL)
    .then((conn)=>{console.log(`Database Connected Successfully: ${conn.connection.host}`)})
    .catch((error)=>{console.log(`Fail to Connect Database`,error)})
}




module.exports = {connectToDB}