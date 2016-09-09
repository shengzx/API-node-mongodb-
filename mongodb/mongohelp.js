var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/yellowpage');
var mongo = function(){};
mongo.mongoose = mongoose;
mongo.db = db;
module.exports = mongo;