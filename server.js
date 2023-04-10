const express=require('express');
const cors=require('cors');
const {connectDatabase}=require("./database/connectDatabase")
const {userRouter}=require("./routes/userRoute")
const {postRouter}=require("./routes/PostRoute")
const{checkLoggedin}=require("./middlewares/checkLogginedin");
require("dotenv").config();

const PORT=process.env.PORT;
const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("server is runing");
})

app.use("/users",userRouter);
app.use("/posts",checkLoggedin,postRouter);

const startServer=async()=>{
    try{
        app.listen(PORT,()=>{
            console.log("server is running"+PORT);
        });
        await connectDatabase();
        console.log("database successfully connected");
    }
    catch(error){
        console.log(error);
    }
}
module.exports={startServer};