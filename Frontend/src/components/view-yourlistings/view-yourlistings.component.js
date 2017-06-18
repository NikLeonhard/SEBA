'use strict';

import template from './view-yourlistings.template.html';
import ListingsService from './../../services/listings/listings.service';
import UserService from './../../services/user/user.service';


class ViewYourListingsComponent {
    constructor(){
        this.controller = ViewYourListingsComponentController;
        this.template = template;
        this.bindings = {
            listings: '<',
        }

    }

    static get name() {
        return 'viewYourListings';
    }


}

class ViewYourListingsComponentController{
    constructor($state,ListingsService,UserService){
        this.$state = $state;
        this.Listings = ListingsService;
        this.UserService = UserService;

    }

    edit () {

    };


    delete(listing) {
            let _id = listing['_id'];
            this.Listings.delete(_id).then(response => {
            let index = this.listings.map(x => x['_id']).indexOf(_id);
            this.listings.splice(index, 1)});
        }

    details (listing) {
        let _id = listing['_id'];
        this.$state.go('listing',{ listingId:_id});
    }




    getPosterURL(){
        let posterURL = 'http://placehold.it/32x32';

        return posterURL;
    }

    static get $inject(){
        return ['$state', ListingsService.name, UserService.name];
    }

}


export default ViewYourListingsComponent;