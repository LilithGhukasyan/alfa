class Controller{
    static async insertData(req,rea,next){ 
        try{
            const data = req.body;
        }catch(err){
            console.error(err)
            next(error);
        }
    }
}
module.exports=Controller;