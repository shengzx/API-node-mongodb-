var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost:27017/user');
db.on('error', function (error) {
    return error;
});
//数据表模型
var userSchema = new mongoose.Schema({
    userName: string,
    userSex: string,
    userEmail: string,
    headPortrait: string,
    userType: string,
    userRole: string,
    userKey: string,
    userOpenKey: string,
    userToken: string,
    userLogin: string,
    userPassWord: string,
    userphone: string
});

userSchema.methods.finduserLogin = function (userLogin, userPassWord, fun) {
    return this.model('user').find({ userLogin: userLogin, userPassWord: userPassWord }, fun);
};
var userModel = db.model('user', userSchema);

var userEntity = new userModel({});