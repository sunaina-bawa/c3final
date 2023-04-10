const {Router}=require("express")

const {registerUser,loginUser}=require("../controller/userController");

const userRouter=Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);

module.exports={userRouter};
