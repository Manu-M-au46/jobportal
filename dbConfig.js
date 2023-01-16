const mongoose = require('mongoose')

const connectURL = "mongodb+srv://manumurali:manu7890@mongotrial.jozgpvt.mongodb.net/?retryWrites=true&w=majority"

async function DBConnect() {
    try {
        await mongoose.connect(connectURL, {dbName: 'DreamJobs'})
        console.log("connection to DB successfull")
    } catch (error) {
        console.log("error conencting DB")
        process.exit()
        
    }

}

module.exports = DBConnect