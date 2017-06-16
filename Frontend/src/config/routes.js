'use strict';

import ViewIndexComponent from './../components/view-index/view-index.component';
import LoginComponent from './../components/view-login/view-login.component';
import ViewListingCreateComponent from './../components/view-listing-create/view-listing-create.component';
import ViewListingsComponent from './../components/view-listings/view-listings.component';

import ListingsService from './../services/listings/listings.service';

resolveListing.$inject = ['$stateParams', ListingsService.name];
function resolveListing($stateParams,listingsService){
    return listingsService.get($stateParams.movieId);
}

resolveListings.$inject = [ListingsService.name];
function resolveListings(listingsService){
    return listingsService.list();
}


config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function config ($stateProvider, $urlRouterProvider){

    // For any unmatched url, redirect to /home
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

        .state('viewListings', {
            url: '/viewListings',
            component: ViewListingsComponent.name,
        })

}

