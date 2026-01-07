

import express from 'express';
import bcrypt from 'bcrypt';

import ConectDB from './DBConnectivity/dbConnection.js';

import DataSchema from './Models/UserModel.js';

const app = express();

app.use(express.json());

// http://localhost:5000/registration

app.post('/registration',async(req,res)=>{

    const {username, useremail, userpass} = req.body;

    const salt = await bcrypt.genSaltSync(10);

    var hashpass = await bcrypt.hashSync(userpass, salt);

    if(!username || !useremail || !userpass){
        return res.send("All field need to Fill!");
    }

    var UserNewData = {
        username,
        useremail,
        userpass: hashpass
    }

    await DataSchema.create(UserNewData)

    res.send(UserNewData);
})

app.post('/Login',async(req,res)=>{
    const {useremail,userpass} = req.body;

    if(!useremail || !userpass){
        return res.send("Kindly fill all the fields")
    }

    var userAvail = await DataSchema.findOne({useremail});

    if(!userAvail){
        return res.send("User not found, Kindly register first");
    }

    //var DBPass = userAvail.userpass;

    var ValidOrNot = await bcrypt.compare(userpass, userAvail.userpass);

    if(!ValidOrNot){
        return res.send("something went wrong");
    }

    return res.send("Login Successful");

})

app.listen(5000,()=>{
    ConectDB();
    console.log("Server is running on port 5000");
})

