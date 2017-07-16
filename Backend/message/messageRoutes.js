module.exports = messageRoutes;

function messageRoutes(passport) {

    var messageController = require('./messageController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route('/')
		.get(messageController.getConversations)
        .post(messageController.putMessage);

    router.route('/:conversation_id')
        .get(messageController.getMessages);

    return router;
}
