'use strict';

import ViewIndexComponent from './../components/view-index/view-index.component';
import LoginComponent from './../components/view-login/view-login.component';
import ViewListingCreateComponent from './../components/view-listing-create/view-listing-create.component';
import ViewListingsComponent from './../components/view-listings/view-listings.component';

import MoviesService from './../services/movies/movies.service';


resolveMovie.$inject = ['$stateParams', MoviesService.name];
function resolveMovie($stateParams,moviesService){
    return moviesService.get($stateParams.movieId);
}

resolveMovies.$inject = [MoviesService.name];
function resolveMovies(moviesService){
    return moviesService.list();
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

