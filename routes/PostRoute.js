const {Router}= require("express")

const {getPosts,createPost,updatePost,deletePost}=require("../controller/postController")
const {checkCreatePost}=require("../middlewares/postMiddleare")
const postRouter=Router();

postRouter.get("/",getPosts);
postRouter.post("/create",checkCreatePost,createPost);
postRouter.patch("/update",updatePost);
postRouter.delete("/delete",deletePost);

module.exports={postRouter}