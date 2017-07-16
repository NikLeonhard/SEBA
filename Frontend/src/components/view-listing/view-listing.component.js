/**
 * Created by Fabian on 16.06.2017.
 */

'use strict';

import template from './view-listing.template.html';
import ListingsService from './../../services/listings/listings.service';
import UserService from './../../services/user/user.service';
import MessageService from './../../services/message/message.service';
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
    constructor($state,ListingsService,UserService, MessageService){
        this.$state = $state;
        this.ListingService = ListingsService;
        this.UserService = UserService;
        this.MessageService = MessageService;
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

    message(){
        let message = {};
        let user = this.UserService.getCurrentUser();

        message['recipient'] = this.listing['user'];
        message['sender'] = user['_id'];

        message['content'] = "Starting Conversation!";
        message['time'] = Date.now;


        this.MessageService.create(message).then(data => {
            let _id = data['_id'];

            this.$state.go('viewMessages',{});
        });
    }

    static get $inject(){
        return ['$state', ListingsService.name, UserService.name, MessageService.name];
    }

}


export default ViewListingComponent;