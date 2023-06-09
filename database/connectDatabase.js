const mongoose=require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery",true);

const databaseName="/instra";

const connectDatabase=async ()=>{
    await mongoose.connect(process.env.MONGO_URI+databaseName);
};

module.exports={connectDatabase};