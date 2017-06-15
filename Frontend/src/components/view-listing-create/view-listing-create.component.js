
'use strict';

import template from './view-listing-create.template.html';

import ListingService from './../../services/listings/listings.service';
import UserService from './../../services/user/user.service';

class ViewListingCreateComponent {
    constructor(){
        this.controller = ViewListingCreateComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewListingCreate';
    }
}

class ViewListingCreateComponentController {
    constructor($state, ListingService,UserService){
        this.listing = {};
        this.$state = $state;
        this.ListingService = ListingService;
        this.UserService = UserService;
    }

    cancel() {
        this.$state.go('index',{});
    };


    save() {
        let user = this.UserService.getCurrentUser();

        this.listing['user'] = user['_id'];
        //this.$state.go('index',{});
        this.ListingService.create(this.listing).then(data => {
            let _id = data['_id'];
            //this.$state.go('movie',{ movieId:_id});
            this.$state.go('index',{});
            // Go to my listings here
        });

    };


    static get $inject(){
        return ['$state', ListingService.name, UserService.name];
    }

}


export default ViewListingCreateComponent;