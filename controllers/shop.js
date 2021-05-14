const Product = require('../models/products');
exports.addPortfolio = (req, res, next) => {      
    let Data = req.body.Portfolios[0];
    const id = Data._Id;
    const name = Data.Name;
    const transaction =  Data.Transactions;  
    let secDataArr = [];
    transaction.forEach((itemVal, key) => {
        secDataArr.push(itemVal['SecurityId']);  
    })
    const finalSecArr  = JSON.stringify(secDataArr); 
    const finalTrans = JSON.stringify(transaction);   
    const product = new Product(name, finalSecArr, finalTrans);    
    product.save().then(() => { 
        res.json({ res:'1' ,msg:'successfully Created'});  
    }).catch(delerr =>{
        res.json({ res:'0' ,msg:'Unable to Add'});  
        console.log(delerr);
    }); 

}  


