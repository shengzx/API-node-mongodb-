var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/yellowpage');
//数据表模型
var Schema = mongoose.Schema;
var user=function(){};
var userSchema = new Schema({
    userName: String,
    userSex: String,
    userEmail: String,
    headPortrait: String,
    userType: String,
    userRole: String,
    userKey: String,
    userOpenKey: String,
    userToken: String,
    userLogin: String,
    userPassWord: String,
    userphone: String
});
var headPortraitSchema = new Schema({
    userKey:String,
    url:String
});
user.headPortraitModel = mongoose.model('headPortrait', headPortraitSchema);
user.userModel = mongoose.model('user',userSchema);
module.exports = user;