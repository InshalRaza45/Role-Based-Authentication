import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    username:{
        type:"String"
    },

    useremail:{
        type:"String"
    },

    userpass:{
        type:"String"
    }

})

var DataSchema = mongoose.model("User", UserSchema);
export default DataSchema;