const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const productsController = require('../controllers/products');

const contactController = require('../controllers/contact');

const successController = require('../controllers/success')
//   /admin/add-product => get
router.get('/add-product', productsController.getAddProduct);

router.get('/ContactUs' , contactController.getContact);

router.get('/success' , successController.getSuccess);
//  /admin/add-product => Post

 router.post('/add-product' , productsController.postAddProduct);

 router.post('/ContactUs', contactController.postContact) 

 router.get('/success' ,(req,res,next) => {
  console.log(req.body); 
  res.send('<h3>Form successfuly filled</h3>');
 // res.redirect('/');
})

module.exports = router;
