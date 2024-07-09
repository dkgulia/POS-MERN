const express = require('express')
const { getItemContainer,addItemController} = require('../Controllers/itemController')
const router = express.Router()


//routes
//get method
router.get('/get-item',getItemContainer);


//post method
router.post('/add-item',addItemController)
module.exports = router