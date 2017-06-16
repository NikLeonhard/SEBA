/**
 * Created by Fabian on 15.06.2017.
 */
'use strict';

import template from './view-listings.template.html';
import ListingsService from './../../services/listings/listings.service';
import UserService from './../../services/user/user.service';

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
        this.Listing = ListingsService;
        this.UserService = UserService;
    }

    static get $inject(){
        return ['$state', ListingsService.name, UserService.name];
    }
}

export default ViewListingsComponent;