const mongoose = require("mongoose");

async function connection() {
    try {
        await mongoose.connect(process.env.Mongo_URI)
        console.log("Server connected to Mongoose")
    } catch (error) {
        console.log(error)
    }
}

connection()