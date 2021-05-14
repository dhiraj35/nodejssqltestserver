const Product = require('../models/products');
const Security = require('../models/security');  
exports.addPortfolio = (req, res, next) => {      
    let Data = req.body.Portfolios[0];
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

exports.addSecurity = (req, res, next) => {        
    let Data = req.body.Securities[0];
    const id = Data._Id;
    const name = Data.name;
    const transaction =  Data.HistoryDetail;   
    const finalTrans = JSON.stringify(transaction);   
    const security = new Security(id,name,finalTrans);    
    security.save().then(() => {     
        res.json({ res:'1' ,msg:'successfully Created'});  
    }).catch(delerr =>{
        res.json({ res:'0' ,msg:'Unable to Add'});  
        console.log(delerr);
    }); 

}


