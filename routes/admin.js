const express = require('express');  
const auth = require('../middleware/auth');  
//const path = require('path');

const admincontroller = require('../controllers/admin');  

const router = express.Router();  
router.post('/addPortfolio', [auth.validatepublickey] ,admincontroller.addPortfolio);  
router.post('/addSecurity',[auth.validatepublickey],admincontroller.addSecurity);        
          

module.exports = router;                