var mongoose = require('mongoose');
var schema = mongoose.Schema;

//Setup a schema and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
	name: String,
	password: String,
	admin: Boolean
}));