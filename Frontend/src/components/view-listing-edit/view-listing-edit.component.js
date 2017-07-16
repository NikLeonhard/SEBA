
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
        this.model = {};
        this.$state = $state;
        this.ListingsService = ListingsService;
    }


    $onInit() {
        //Clone the Movie Data
        this.model = JSON.parse(JSON.stringify(this.listing))
    }

    cancel() {
        this.model = JSON.parse(JSON.stringify(this.listing));
        this.$state.go('viewYourListings',{});
    };

    save() {
        let _id = this.listing['_id'];

        this.ListingsService.update(this.listing).then(data => {
            this.listing = JSON.parse(JSON.stringify(data));

            this.$state.go('listing',{ listingId:_id });
        });

    };

    delete() {
        let _id = this.listing['_id'];

        this.ListingsService.delete(_id);
        this.$state.go('viewYourListings',{});
    };

    static get $inject(){
        return ['$state', ListingsService.name];
    }

}


export default ViewListingEditComponent;
