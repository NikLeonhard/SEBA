// importing Message model
var Message = require('./messageSchema');

// TODO: Get conversation list of user
// Create endpoint /api/messages for GET
exports.getMessageList = function(req, res) {
	// TODO: GET ALL CONVERSATIONS FOR CURRENT USER

	Message.find(function(err, messages) {
        if (err) {
            res.status(400).send(err);
            return;
        }
	});
	
	
	/*
    Message.find(function(err, messages) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.json(messages);
    });
	*/
};

// TODO: Get all messages of a conversation
// Create endpoint /api/messages/:message_id for GET
exports.getMessages = function(req, res) {
	// TODO: GET MESSAGES EXCHANGED WITH CONVERSATION PARTNER USERID (= CONVERSATION ID)

	/*
    Message.findById(req.params.message_id, function(err, message) {
        if (err) {
            res.status(400).send(err)
            return;
        };

        res.json(message);
    });
	*/
};

// TODO: Save a new Message to a conversation
// Create endpoint /api/messages/:message_id for PUT
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