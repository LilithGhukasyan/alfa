const { default: mongoose } = require("mongoose");

require("dotenv").config();
const url = process.env.MONGODB_url;
 mongoose.connection.once("open", ()=>{
    console.log("successfully connected")
 })
 mongoose.connection.on("error", ()=>{
    console.error("error")
 });
 const connectMongo = ()=>{
    mongoose.connect(url,{dbName:"users"})
};
 const disconnectMongo = ()=>{
    mongoose.disconnectMongo(url,{dbName:"users"})
 };
 module.exports={connectMongo,disconnectMongo }