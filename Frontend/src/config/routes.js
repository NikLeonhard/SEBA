'use strict';

import AppIndexComponent from './../components/view-index/view-index.component';
import LoginComponent from './../components/view-login/view-login.component';

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

        .state('login', {
            url: '/login',
            component: LoginComponent.name,
        })


}

