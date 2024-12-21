 const  Module  = require("module");
const redis  = require("./redis.config");
 class Model{
    static async  insertData(data){
        try {
            await  redis.hmset("user",data)
            
        } catch (error) {
            console.errorf(error);
        }
    
    }
    static async  getData(){
    try {
        const data = await  redis.hgetall("user");
        return data;
        
    } catch (error) {
        console.errorf(error);
    }

}
static async  deletData(){
    try {
        const result = await redisClient.del("user");;
        if (result === 0) {
            throw new Error("User not found"); // Եթե տվյալը չգտնվի Redis-ում
          }
          return { message: "User deleted successfully" }; // Հաջող արդյունք
        } catch (error) {
          console.error("Error deleting user:", error);
          throw error; // Սխալը վերափոխում ենք՝ վերևի մակարդակին փոխանցելու համար
        }
      }
    }
    
    module.exports = Model;

