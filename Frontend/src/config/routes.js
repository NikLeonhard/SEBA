'use strict';

import ViewIndexComponent from './../components/view-index/view-index.component';
import LoginComponent from './../components/view-login/view-login.component';
import ViewListingCreateComponent from './../components/view-listing-create/view-listing-create.component';
import ViewListingsComponent from './../components/view-listings/view-listings.component';
import ViewListingComponent from './../components/view-listing/view-listing.component';
import ViewYourListingsComponent from './../components/view-yourlistings/view-yourlistings.component'

import ListingsService from './../services/listings/listings.service';

resolveListing.$inject = ['$stateParams', ListingsService.name];
function resolveListing($stateParams,listingsService){
    return listingsService.get($stateParams.listingId);
}

resolveListings.$inject = [ListingsService.name];
function resolveListings(listingsService){
    return listingsService.list();
}


config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function config ($stateProvider, $urlRouterProvider){

    // For any unmatched url, redirect to /index
    $urlRouterProvider.otherwise("/index");

    $stateProvider
        .state('index', {
            url: '/index',
            component: ViewIndexComponent.name,

        })
        .state('listingAdd', {
            url: '/listingAdd',
            component: ViewListingCreateComponent.name,

        })
        .state('login', {
            url: '/login',
            component: LoginComponent.name,
        })
        .state('listing', {
            url: '/listing/:listingId',
            component: ViewListingComponent.name,
            resolve: {
                listing : resolveListing
            }
        })
        .state('viewListings', {
            url: '/viewListings',
            component: ViewListingsComponent.name,
            resolve:{
                listings: resolveListings}
        })
        .state('viewYourListings',{
            url:'/viewYourListings',
            component: ViewYourListingsComponent.name,
            resolve:{
                listings: resolveListings
            }
        })
}

