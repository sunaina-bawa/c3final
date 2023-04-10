const {Schema,model}=require('mongoose');

const UserSchema=new Schema({
    name:String,
    email:String,
    gender:String,
    password:String
})

const UserModel=model("User",UserSchema);


module.exports={
    UserModel,
}