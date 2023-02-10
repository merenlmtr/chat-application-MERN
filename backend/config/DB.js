const mongoose = require("mongoose")


const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true); //suppressing Mongoose 7 Deprecation Warning
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB connected to: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB