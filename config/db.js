const jwt=require("jsonwebtoken");

const createJwtToken=(payload)=>{
    return  jwt.sign(payload,"super key");
}

const verifyToken=async (token)=>{
    try {
        const {name,userId}=await jwt.verify("token","super Key");
        return {user:{name,userId},status:true}; 
    } catch (error) {
        return {return:false};
    }
};

module.exports={createJwtToken,verifyToken};