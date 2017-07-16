
'use strict';

import template from './view-listing-edit.template.html';

import ListingsService from './../../services/listings/listings.service';

class ViewListingEditComponent {
    constructor(){
        this.controller = ViewListingEditComponentController;
        this.template = template;
        this.bindings = {
            listing: '<',
        }
    }

    static get name() {
        return 'viewListingEdit';
    }
}

class ViewListingEditComponentController{
    constructor($state, ListingsService){
        this.$state = $state;
        this.ListingsService = ListingsService;
    }


    $onInit() {
    }

    cancel() {
        this.$state.go('viewYourListings',{});
    };

    save() {
        this.ListingsService.update(this.listing).then(data => {
            this.listing = JSON.parse(JSON.stringify(data));

            this.$state.go('viewYourListings',{});
        });

    };

    delete() {
        let _id = this.listing['_id'];

        this.ListingsService.delete(_id).then(response => {
            this.$state.go('',{});
        });
    };

    static get $inject(){
        return ['$state', ListingsService.name];
    }

}


export default ViewListingEditComponent;
