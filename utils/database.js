import mongoose from "mongoose";
//track connection - initially not connected to user account
let isConnected = false;
export const connectToDB = async () => {
    //for no warnings (next.js)
    mongoose.set('strictQuery', true);
    //check if currently connected
    if(isConnected){
        console.log("MongoDB is already connected");
        return;
    }
    //if not already connected try and catch to estabilish connection
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            //need to add more for project
            dbName: "prompt_genie",
            useUnifiedTopology: true,
            // useNewUrlParser: true,
        })
        isConnected = true;
        console.log("mongoDB is connected")
    } catch (error) {
        console.log(error);
    }
}