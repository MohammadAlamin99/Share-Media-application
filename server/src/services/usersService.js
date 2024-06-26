const UsersModel = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const cloudinary = require("../middleware/cludinary");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// user Registration
exports.UserRegistration = async (req) => {
    try {
        let reqBody = req.body;
        await UsersModel.create(reqBody);
        return {status:"success", message:"Regestaration Successfully"}
    } catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}

// user Login
exports.UserLogin = async (req)=>{
    try {
        let reqBody = req.body;
        let data = await UsersModel.aggregate([
            {$match:reqBody},
            {$project:{"password":0,"createdDate":0 }}
        ])
        if(data.length>0){
           let payload = {
            data:data[0]['email'],
            id:data[0]['_id']
        };  //token create process eikhane email take jwt .sing er moddy diya token banano hoyece..ekhn jodi cai taholy email er sathy ro kisu add korte pari
           let token = jwt.sign(payload, 'bcd123');   //jwt.sing er maddome token create kora hoy
           return({status:"success",token:token, data:data[0]})
        }
        else{
            return {status:"fail", message:"something went wrong"}
        }
    } catch (e) {
        return {status:"fail", message:"something went wrong"}
    }
}


// Searching User for Friends
exports.UserFriends = async (req) => {
    try {
        let data = await UsersModel.find();
        return {status:"success", data:data}
    } catch (e) {
        return {status:"fail", message:e}
    }
}



exports.UpadateProfile = async (req) => {
    try {
      let email = req.headers.email;
      let reqBody = req.body;  

      const result = await cloudinary.uploader.upload(req.file.path);
      let imageUrl = result.secure_url;
        
        // Add the image URL to the request body
        reqBody.photo = imageUrl;

      let data = await UsersModel.updateOne({ email: email }, reqBody);
  
      return { status: "success", data: data };
    } catch (e) {
      return { status: "fail", message: e.message };
    }
  };
  



// get user details
exports.UserProfileDetails = async (req)=>{
    try {
        let email = req.headers['email'];
        let data = await UsersModel.aggregate([
            {$match:{email:email}},
            {$project:{_id:1,email:1,userName:1,photo:1,password:1}}
        ])
        return({status:"success", data:data});

    } catch (e) {
        return {status:"fail", message:"something went wrong"}
    }
}

// for friend profile
exports.friendsProfile = async (req)=>{
    try {
        let id = new ObjectId(req.params.id);
        let data = await UsersModel.aggregate([
            {$match:{_id:id}},
            {$project:{_id:1,email:1,userName:1,photo:1,password:1}}
        ])
        return({status:"success", data:data});

    } catch (e) {
        return {status:"fail", message:"something went wrong"}
    }
}






