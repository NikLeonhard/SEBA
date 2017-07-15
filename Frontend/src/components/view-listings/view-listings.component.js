/**
 * Created by Fabian on 15.06.2017.
 */
'use strict';

import template from './view-listings.template.html';
import ListingsService from './../../services/listings/listings.service';
import UserService from './../../services/user/user.service';
import './view-listings.style.css'

class ViewListingsComponent{

	constructor(){
		this.controller = ViewListingsComponentController;
		this.template = template;
		this.bindings = {
			listings: '<',
		}
	}

	static get name() {
		return 'viewListings';
	}
}

class ViewListingsComponentController{
	constructor($state,ListingsService,UserService){
		this.$state = $state;
		this.Listings = ListingsService;
		this.UserService = UserService;
	}

	details (listing) {
		let _id = listing['_id'];
		this.$state.go('listing',{ listingId:_id});
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

		return listing.postcode.includes(zipCode);
	}

	queryAll(input,lowerEnd,upperEnd,listing,zipCode){
		return (this.queryTitle(input,listing) && this.queryRange(lowerEnd,upperEnd,listing)&& this.queryZipCode(zipCode,listing));
	}


}

export default ViewListingsComponent;