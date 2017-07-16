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

    queryTitle(input, listing){
        if(typeof input == 'undefined' || input.toString().length==0)
            return true;

        return(listing.title.includes(input.toString()));
    }


    queryRange(lowerEnd,upperEnd,listing){
        var lowerEndInt = parseInt(lowerEnd,10);
        var upperEndInt = parseInt(upperEnd,10);


        if(lowerEndInt.toString()=="NaN" && upperEndInt.toString()=="NaN") {
            return true
        }



        if(lowerEndInt==0 && upperEndInt==0) {
            return true;
        }

        if(lowerEndInt>upperEndInt)
            return (listing.amount>=upperEndInt && listing.amount<=lowerEndInt)


        else {
            return (listing.amount<=upperEndInt && listing.amount>=lowerEndInt)
        }
    }

    queryZipCode(zipCode, listing) {
        if(typeof zipCode === 'undefined' || zipCode.toString().length ==0)
            return true;

        return listing.postcode.includes(zipCode);
    }

    queryAll(input,lowerEnd,upperEnd,listing,zipCode){
        return (this.queryTitle(input,listing) && this.queryRange(lowerEnd,upperEnd,listing)&& this.queryZipCode(zipCode,listing));
    }
}

export default ViewListingsSseComponent;