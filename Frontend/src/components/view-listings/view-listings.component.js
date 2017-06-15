/**
 * Created by Fabian on 15.06.2017.
 */
'use strict';

import template from './view-listings.template.html';
import MoviesService from './../../services/listings/listings.service';
import UserService from './../../services/user/user.service';

class ViewListingsComponent{

    constructor(){
        this.controller = ViewListingsComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewListings';
    }
}

class ViewListingsComponentController{
    constructor($state,MoviesService,UserService){
        this.$state = $state;
        this.MoviesService = MoviesService;
        this.UserService = UserService;
    }

    //TODO
    details (listing) {
        let _id = listing['_id'];
        this.$state.go('movie',{ movieId:_id});
    };
}

export default ViewListingsComponent;