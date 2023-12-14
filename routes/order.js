// express 
const express = require('express');

const isLoggedIn = require('../config/isLoggendin');
// initilize router functionality from express framework
const router=express.Router();
const isAdmin = require('../config/isAdmin')
//IMPORTANT
router.use(express.urlencoded({extended:true}));

//require index controller
const orderCntrl = require('../controllers/order');

// create get 

router.get("/addO", isLoggedIn, orderCntrl.order_create_get);

// create post 

router.post("/addO", isLoggedIn, orderCntrl.order_create_post)

// index get 

router.get("/indexO", orderCntrl.order_index_get)

// show get 

router.get("/detailO", orderCntrl.order_show_get)

// edit get 

router.get("/editO", isLoggedIn, orderCntrl.order_edit_get)

// delete get 

router.get("/deleteO", isLoggedIn, orderCntrl.order_delete_get)

// update post

router.post("/updateO", isLoggedIn, orderCntrl.order_update_post)

//export router
module.exports = router;

