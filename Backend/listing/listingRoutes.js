module.exports = listingRoutes;


function listingRoutes(passport) {

    var listingController = require('./listingController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route('/')
        .post(listingController.postListing)
        .get(listingController.getListings);

    router.route('/:listing_id')
        .get(listingController.getListing)
        .put(listingController.putListing)
        .delete(listingController.deleteListing);

    return router;
}
