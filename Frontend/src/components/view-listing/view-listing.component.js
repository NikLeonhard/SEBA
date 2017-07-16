/**
 * Created by Fabian on 16.06.2017.
 */

'use strict';

import template from './view-listing.template.html';
import ListingsService from './../../services/listings/listings.service';
import UserService from './../../services/user/user.service';
import './view-listing.style.css'

class ViewListingComponent {
    constructor(){
        this.controller = ViewListingComponentController;
        this.template = template;
        this.bindings = {
            listing: '<',
        }

    }

    static get name() {
        return 'viewListing';
    }


}

class ViewListingComponentController{
    constructor($state,ListingsService,UserService){
        this.$state = $state;
        this.ListingService = ListingsService;
        this.UserService = UserService;

    }

    edit () {
        let _id = this.listing['_id'];
        this.$state.go('viewListingEdit',{ listingId:_id});
    };


    delete() {
        let _id = this.listing['_id'];
        this.ListingService.delete(_id);
        this.$state.go('viewYourListings',{});
    };


    getPosterURL(){
        let posterURL = 'http://placehold.it/32x32';

        return posterURL;
    }

    static get $inject(){
        return ['$state', ListingsService.name, UserService.name];
    }

}


export default ViewListingComponent;