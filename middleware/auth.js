const config = require('../config/app.json');
module.exports = {  
  validatepublickey: async (req, res, next) => {  
    try {
      let public =  req.header("x-public");
      if(config.PUBLIC_KEY === public){
        next();
      }else {
  res.json({ res:'1' ,msg:'Public Key not Found'}); 
      }
     
      return 1;  
    } catch (error) {
      res.json({ res:'1' ,msg:'Something Went Wrong'}); 
      return 1;
    }
  },
};
