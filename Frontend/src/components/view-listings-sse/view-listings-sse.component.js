/**
 * Created by Fabian on 29.06.2017.
 */

'use strict';

import template from './view-listings-sse.template.html';
import './view-listings-sse.style.css'

class ViewListingsSseComponent{

    constructor(){
        this.controller = ViewListingsSseComponentController;
        this.template = template;
        this.bindings = {
            listings: '<'
        }
    }

    static get name() {
        return 'viewListingsSse';
    }
}

class ViewListingsSseComponentController{
    constructor($state){
        this.$state = $state;
    }

    details (listing) {
        let _id = listing['_id'];
        this.$state.go('listing',{ listingId:_id});
    };

    static get $inject(){
        return ['$state'];
    }
}

export default ViewListingsSseComponent;