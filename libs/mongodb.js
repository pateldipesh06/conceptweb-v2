import { mongoose } from "mongoose";

const  connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://harnish08:harnish08@cluster0.n4wwfii.mongodb.net/crud_db")
        console.log("Connected to MongoDB.")
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;