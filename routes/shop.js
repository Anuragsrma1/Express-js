const path = require('path');


const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const shopController = require('../controllers/products'); 
router.get('/', shopController.getshop);


module.exports = router;