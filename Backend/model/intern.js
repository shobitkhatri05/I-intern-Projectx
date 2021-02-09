var mongoose = require('mongoose');
var jwt=require('jsonwebtoken')
var Register = mongoose.Schema({
    
    FirstName:String,
    LastName : String,
    Email: String,
    Password: String,
    ConfirmPassword : String,
    Phone : String,

    

});
Register.methods.generateJwt = function () {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.register({
      _id: this._id,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  }


module.exports= mongoose.model('Register',Register);


