/**
 * Created by Fabian on 16.06.2017.
 */

'use strict';

import template from './view-listing.template.html';
import ListingsService from './../../services/listings/listings.service';
import UserService from './../../services/user/user.service';

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
        this.Listing = ListingsService;
        this.UserService = UserService;

    }

    edit () {

    };


    delete() {

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