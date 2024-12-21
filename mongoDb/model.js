const mongo = require('./config.mongo');
const mongoModel = require('./mongoschema')
class Model{
    static async insertData(data){
        try{
   await mongo.connectMongo();
        }catch(error){
      console.error(error);
        }
    }
}