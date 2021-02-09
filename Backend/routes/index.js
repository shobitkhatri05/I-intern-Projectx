const express = require('express');
const mongoose = require('mongoose');
const app = express();
var bcrypt = require('bcryptjs');
var Register = require('../model/intern')
 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  });
 
  router.post("/addUserRegistration", (req, res) => {
    console.log(req.body.FirstName);
  
    Register.findOne({ Email: req.body.Email }, (err, callbackData) => {
      if (err) console.log(err);
      else {
        if (callbackData) {
          res.json({ message: "Already Registered" });
        } else {
          if (req.body.Password == req.body.ConfirmPassword) {
            var salt = bcrypt.genSaltSync(10);
            const hashing = bcrypt.hashSync(req.body.Password, salt);
  
            new Register({
              FirstName: req.body.FirstName,
              LastName : req.body.LastName,
              Email : req.body.Email,
              Password : req.body.Password,
              ConfirmPassword : req.body.ConfirmPassword,
              Phone : req.body.Phone
  
            }).save((err, callback) => {
              if (err) console.log(err);
              else res.json({ message: "registered" });
            });
          } else {
            res.json({ message: "Password doesn't matched" });
          }
        }
      }
    });
  }
  );
 

module.exports = router;