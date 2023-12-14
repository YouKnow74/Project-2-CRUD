// express 

const express = require('express')
const isLoggedIn = require('../config/isLoggendin');
const isAdmin = require('../config/isAdmin')
// initilize router functionality from express framework
const router=express.Router();
//IMPORTANT
router.use(express.urlencoded({extended:true}));

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + extension)
    }
  })
  
  const upload = multer({ storage: storage })



//require index controller
const userCntrl = require('../controllers/user');

// create get 


router.get("/addU",isAdmin, isLoggedIn, userCntrl.user_create_get);

// create post 

router.post("/addU",isAdmin, isLoggedIn, userCntrl.user_create_post)



// index get 


router.get("/indexU",isAdmin, isLoggedIn, userCntrl.user_index_get)



// show get 


router.get("/detailU", isLoggedIn, userCntrl.user_show_get)


// edit get 


router.get("/editU", isLoggedIn, userCntrl.user_edit_get)


// delete get 


router.get("/deleteU",isAdmin, isLoggedIn, userCntrl.user_delete_get)



// update put 


router.post("/updateU", isLoggedIn,upload.single('avatar'), userCntrl.user_update_put)



module.exports = router;

