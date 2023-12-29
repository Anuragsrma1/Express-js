const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

//   /admin/add-product => get
router.get('/add-product', (req , res, next) => {
    res.sendFile(path.join(rootDir , 'views' , 'add-product.html'));
 });

router.get('/ContactUs' , (req,res,next) =>{
  res.sendFile(path.join(rootDir,'views', 'contact.html'));
  
})

router.get('/success' , (req,res,next) =>{
  res.sendFile(path.join(rootDir,'views', 'success.html'));
  
})
//  /admin/add-product => Post

 router.post('/add-product' ,(req,res,next) => {
   console.log(req.body); 
   res.redirect('/');
 })

 router.post('/ContactUs', (req,res,next) => {
  console.log(req.body);
  res.redirect('/success');
 console.log("Form successfuly filled");
 }) 

 router.post('/success' ,(req,res,next) => {
  console.log(req.body); 
 // res.redirect('/');
})

module.exports = router;
