import mongoose from "mongoose";

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected");
        
    } catch (error) {
        console.error("error in db.js", error);
        
    }
}

export default connectDB