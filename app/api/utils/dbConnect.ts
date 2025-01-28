import mongoose from "mongoose";

let isConnected = false;

export const dbConnect = async(): Promise<void> => {
    if(isConnected) {
        console.log("Database is already Connected");
        return;
    }

    try {
        
        const connection = await mongoose.connect(process.env.MONGO_URI!);
        isConnected = connection.connections[0].readyState === 1;
        console.log("MongoDB Connected : ");
    } 
    catch (error) {
        console.error('MongoDB connection error:', error);
        return
    }
}