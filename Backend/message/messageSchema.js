// Load required packages
var mongoose = require('mongoose');

// Define our message schema
var Message = new mongoose.Schema({
	sender: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	recipient: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	content: {
		type: String,
		required: true
	}
});

// Export the Mongoose model
module.exports = mongoose.model('Message', Message);

