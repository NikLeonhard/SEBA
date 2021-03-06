// importing Message model
var Message = require('./messageSchema');

// TODO: Get conversation list of user
// Create endpoint /api/messages for GET
exports.getMessages = function(req, res) {

	Message.find({
		or: [
			{ $and: [{sender: req.user}, {recipient: req.body}] },
			{ $and: [{sender: req.body}, {recipient: req.user}] }
		]
	}, function(err, messages) {
		if (err) {
			res.status(400).send(err);
			return;
		}

        res.json(messages);
	});
};

// TODO: Get all messages of a conversation
// Create endpoint /api/messages/:conversation_id for GET
exports.getConversations = function(req, res) {

	Message.find({
		$or: [{sender: req.user}, {recipient: req.user}]
	}, function(err, conversations) {
		if (err) {
			res.status(400).send(err);
			return;
		}

        res.json(conversations);
	});
};

// TODO: Save a new Message to a conversation
// Create endpoint /api/messages/:conversation_id for PUT
exports.putMessage = function(req, res) {
	// TODO: INSERT MESSAGE INTO MESSAGES

	Message.findByIdAndUpdate(
		req.params.message_id,
		req.body,
		{
			//pass the new object to cb function
			new: true,
			//run validations
			runValidators: true
		}, function (err, message) {
			if (err) {
				res.status(400).send(err);
				return;
			}
			
			res.json(message);
		});
};

exports.postMessage = function(req, res) {
    var message = new Message(req.body);
    //do not allow user to fake identity. The user who posted the listing must be the same user that is logged in
    if (!req.user._id.equals(message.sender)) {
        res.sendStatus(401);
        return;
    }
    message.save(function(err, newMessage) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).json(newMessage);
    });
};