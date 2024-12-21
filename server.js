const express = require('express');
const mongoose = require('mongoose');
const User = require('./module');
const app = express();
const port = 4000;

mongoose.connect("mongodb+srv://mkrtchyansofia5:BqogqgKog4ejxZV9@agdufirstcluster.1h8xh.mongodb.net/")
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));
async function a(){
    // let name = "first2";
    // let email = "user@.ru";
    // let age = 42;
    // const user = new User({ name, email, age });
    // await user.save();
    const data = await User.find({age:{$lt:40}})
    console.log(data);
}

a();


app.listen(port, () => {
    console.log('server listening 4000 port');
});