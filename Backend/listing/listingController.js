// importing Listing model
var Listing = require('./listingSchema');
exports.postListing = function(req, res) {
    var listing = new Listing(req.body);
    //do not allow user to fake identity. The user who posted the listing must be the same user that is logged in
    if (!req.user.equals(listing.user)) {
        res.sendStatus(401);
        return;
    }
    listing.save(function(err, newListing) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).json(newListing);
    });
};
// Create endpoint /api/listings for GET
exports.getListings = function(req, res) {
    Listing.find(function(err, listings) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.json(listings);
    });
};
// Create endpoint /api/listings/:listing_id for GET
exports.getListing = function(req, res) {
    // Use the Movie model to find a specific movie
    Listing.findById(req.params.listing_id, function(err, listing) {
        if (err) {
            res.status(400).send(err)
            return;
        };

        res.json(listing);
    });
};
// Create endpoint /api/listings/:listing_id for PUT
exports.putListing = function(req, res) {
    // Use the Movie model to find a specific movie and update it
    Listing.findByIdAndUpdate(
        req.params.listing_id,
        req.body,
        {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        }, function (err, listing) {
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.json(listing);
        });
};
// Create endpoint /api/listings/:listing_id for DELETE
exports.deleteListing = function(req, res) {
    // Use the Listing model to find a specific listing and remove it
    Listing.findById(req.params.listing_id, function(err, listing) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        listing.remove();
        res.sendStatus(200);
    });
};