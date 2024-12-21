const Model = require("./model")

class Controller{
    static  async insertData(req,res,next){
        try {
            const data = req.body;
            console.log(data);
await Model.insertData(data);
        } catch (error) {
            console.error(error);
           next(error);
        }
  
    }
    static  async getData(req,res,next){
        try {
         
   const data = await Model.getData();
   res.send(data);
        } catch (error) {
            console.error(error);
           next(error);
        }
  
    }
    static  async deleteData(req,res,next){
        try {
         
   await Model.deletData();
   res.send("data succesfully deleted");
        } catch (error) {
            console.error(error);
           next(error);
        }
  
    }
    static async deleteData(req, res, next) {
        try {
          await Model.deleteData(); // Այստեղ ուղղեցի անունը՝ deleteData
          res.status(200).send("Data successfully deleted");
        } catch (error) {
          console.error("Error in Controller:", error);
          next(error); // Փոխանցում ենք սխալը հաջորդ middleware-ին
        }
      }
    }