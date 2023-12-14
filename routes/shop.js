// express 
const express = require('express')
// load the log in config
const isLoggedIn = require('../config/isLoggendin');

const isAdmin = require('../config/isAdmin')

//require multer for images
const multer = require("multer");
// inititlizing multer storage from documentation
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //Setting the path for the images
      cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
        //get the file extenstion from file mime type
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];

      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + extension)
    }
  })
  
  //using multer storage as an upload 
  const upload = multer({ storage: storage })

// initilize router functionality from express framework
const router=express.Router();
//IMPORTANT
router.use(express.urlencoded({extended:true}));



//require shop controller
const shopCntrl = require('../controllers/shop');

// create get 

router.get("/addS",isAdmin, isLoggedIn, shopCntrl.shop_create_get);

// create post 

router.post("/addS",isAdmin, isLoggedIn,upload.single('image'), shopCntrl.shop_create_post)

// index get 

router.get("/indexS", shopCntrl.shop_index_get)

// show get 

router.get("/detailS", shopCntrl.shop_show_get)

// edit get 

router.get("/editS",isAdmin, isLoggedIn, shopCntrl.shop_edit_get)


// delete get 

router.get("/deleteS",isAdmin, isLoggedIn, shopCntrl.shop_delete_get)

// update post 

router.post("/updateS",isAdmin, isLoggedIn,upload.single('image'), shopCntrl.shop_update_put)

//export router
module.exports = router;

