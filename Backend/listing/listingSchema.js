// Load required packages
var mongoose = require('mongoose');

// Define our movie schema
var Listing   = new mongoose.Schema({
    title: String,
    type: String,
    amount: Number,
    area: String,
    description: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Listing', Listing);

