var mongo = require('./mongohelp.js');
var user=function(){};
var userSchema = new mongo.mongoose.Schema({
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
user.userModel = mongo.mongoose.model('user',userSchema);
module.exports = user;