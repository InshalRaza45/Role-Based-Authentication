

import express from 'express';
import bcrypt from 'bcrypt';


const app = express();

app.use(express.json());

// http://localhost:5000/registration

app.post('/registration',async(req,res)=>{

    const {username, useremail, userpass} = req.body;

    const salt = await bcrypt.genSaltSync(10);

    var hashpass = await bcrypt.hashSync(userpass, salt);

    var UserNewData = {
        username,
        useremail,
        userpass: hashpass
    }

    res.send(UserNewData);
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})

