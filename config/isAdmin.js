// ensureLoggedIn

//Middleware for routes that require a logged in user
module.exports = function(req,res,next){
    //pass the req/res to the next middleware/route handler
    if(req.isAuthenticated() && req.user.userType=="Admin"){
        return next();
    }else{
        //Redirect to login if the user is not already logged in
        res.redirect('/');
    }
}