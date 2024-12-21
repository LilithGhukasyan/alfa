const express = require("express");
const mongoose = require("mongoose");
const User = require("./modul");
const app = express();
app.use(express.json());

require("dotenv").config();
const port = process.env.PORT;
app.listen(port,()=>{
console.log("listening on port 4000")
})