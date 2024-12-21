const  express = require("express");
const rout = express.Router();
const Controller = require("./controller");
rout.post("/insertData",Controller.insertData);
rout.get("/getData",Controller.getData);
rout.delete("/deleteData",Controller.deleteData);
rout.delete("/deleteOne",Controller.deleteOne);

module.exports = rout;