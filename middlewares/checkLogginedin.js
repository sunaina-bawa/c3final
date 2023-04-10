const {verifyToken}=require("../config/db");

const checkLoggedin=async (req,res,next)=>{
    try {
        const token=req.headers.authorization?.split(" ")[1];
        console.log(token);
        const {user,status}=await verifyToken(token);
        console.log(user,status);
        if(status==false)
        {
            res.status(401);
            return res.json({
                message:"Unauthorized pls login",
                status:false,
            })
        }
        req.user=user;
        next();
        
    } catch (error) {
        res.status(500);
        return res.json({message:"server error", status:false});
   
        
    }
}

module.exports={checkLoggedin};