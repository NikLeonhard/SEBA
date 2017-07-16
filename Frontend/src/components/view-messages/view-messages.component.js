'use strict';

import template from './view-messages.template.html';
import ListingsService from './../../services/message/message.service';
import UserService from './../../services/user/user.service';
import './view-messages.style.css';

class ViewMessagesComponent{

	constructor(){
		this.controller = ViewMessagesComponentController;
		this.template = template;
		this.bindings = {
			messages: '<',
		}
	}

	static get name() {
		return 'viewMessages';
	}
}

class ViewMessagesComponentController{
	constructor($state,MessagesService,UserService){
		this.$state = $state;
		this.Messages = MessagesService;
		this.UserService = UserService;
	}

	/*
	details (listing) {
		let _id = messages['_id'];
		this.$state.go('messages',{ listingId:_id});
	};

	static get $inject(){
		return ['$state', ListingsService.name, UserService.name];
	}

	queryTitle(input, listing){
		if(typeof input == 'undefined' || input.toString().length==0)
			return true;

		return(listing.title.includes(input.toString()));
	}


	queryRange(lowerEnd,upperEnd,listing){
		var lowerEndInt = parseInt(lowerEnd,10);
		var upperEndInt = parseInt(upperEnd,10);


		if(lowerEndInt.toString()=="NaN" && upperEndInt.toString()=="NaN") {
			return true
		}



		if(lowerEndInt==0 && upperEndInt==0) {
			return true;
		}

		if(lowerEndInt>upperEndInt)
			return (listing.amount>=upperEndInt && listing.amount<=lowerEndInt)


		else {
			return (listing.amount<=upperEndInt && listing.amount>=lowerEndInt)
		}
	}

	queryZipCode(zipCode, listing) {
		if(typeof zipCode === 'undefined' || zipCode.toString().length ==0)
			return true;

		return listing.postcode == zipCode;
	}

	queryAll(input,lowerEnd,upperEnd,listing,zipCode){
		return (this.queryTitle(input,listing) && this.queryRange(lowerEnd,upperEnd,listing)&& this.queryZipCode(zipCode,listing));
	}
	*/

}

export default ViewMessagesComponent;