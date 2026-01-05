
import mongoose from "mongoose";

const ConectDB = async()=>{
    try{
    await mongoose.connect("mongodb+srv://admin:admin@rolebasedauth.idqckeb.mongodb.net/?appName=RoleBasedAuth")

    console.log("DB connect successfully");
}
catch(e){
    console.log(e);
}
}
export default ConectDB;