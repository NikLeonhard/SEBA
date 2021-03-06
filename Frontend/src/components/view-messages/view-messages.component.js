'use strict';

import template from './view-messages.template.html';
import MessageService from './../../services/message/message.service';
import UserService from './../../services/user/user.service';
import './view-messages.style.css';

class ViewMessagesComponent{

	constructor(){
		this.controller = ViewMessagesComponentController;
		this.template = template;
		this.message = {};
		this.bindings = {
			messages: '<',
			conversations: '<'
		}
	}

	static get name() {
		return 'viewMessages';
	}
}

class ViewMessagesComponentController{
	constructor($state, MessageService, UserService){
		this.$state = $state;
		this.MessageService = MessageService;
		this.UserService = UserService;
	}
	
	save() {
        let user = this.UserService.getCurrentUser();

        this.message['sender'] = user['_id'];
		this.message['time'] = new Date().getTime();

        this.MessageService.save(this.message).then(data => {
            let _id = data['_id'];

			//TODO: Refresh Page
            this.$state.go('viewMessages',{});
        });

    };

	static get $inject(){
		return ['$state', MessageService.name, UserService.name];
	}
}

export default ViewMessagesComponent;