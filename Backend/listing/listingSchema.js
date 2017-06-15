// Load required packages
var mongoose = require('mongoose');

// Define our listing schema
var Listing   = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Sponsor Offer', 'Sponsor Seeking'],
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    postcode: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Listing', Listing);

