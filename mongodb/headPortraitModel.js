var mongo = require('./mongohelp.js');
var headPortrait = function(){};
var headPortraitSchema = new mongo.mongoose.Schema({
    userKey:String,
    url:String
});
headPortrait.headPortraitModel = mongo.mongoose.model('headPortrait', headPortraitSchema);
module.exports = headPortrait;