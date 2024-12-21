const express = require ("express");
const User = require("./module.js");
const mongoose =require ("mongoose")
const app = express();
const PORT = 4000;

mongoose.connect("mongodb+srv://Lil:LiliAgbu7@agbu.9qc3u.mongodb.net/your_database_name", {
    
  })
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.error(err));
  
async function a(){
    // let name = "a";
   
    // let  email = "b";
    //  let age = 26;
    //  const user = new User({name,  email, age});
    //   await user.save();
      const data = await User.find({age:{$lt:40}});
      console.log(data)

}

a();


app.listen(PORT,()=>{
    console.log("server is listen in port 4000")
});
