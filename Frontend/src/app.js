'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';
import ngMessages from 'angular-messages';

import ListingService from './services/listings/listings';
import UserService from './services/user/user';

import Routes from './config/routes';
import Middlewares from './config/middlewares';

import AppContent from './components/app-content/app-content';
import ViewIndex from './components/view-index/view-index';
import ViewListingCreate from './components/view-listing-create/view-listing-create';


import ViewLogin from './components/view-login/view-login';
import ViewRegister from './components/view-register/view-register';
import ViewListings from './components/view-listings/view-listings';
import ViewListing from './components/view-listing/view-listing';
import ViewYourListings from './components/view-yourlistings/view-yourlistings';
import ViewListingEdit from './components/view-listing-edit/view-listing-edit';
import ViewListingsSse from './components/view-listings-sse/view-listings-sse';
import ViewLegalAdvice from  './components/view-legal-advice/view-legal-advice';
import ViewTutorial from './components/view-tutorial/view-tutorial';

global.jQuery = require('jquery');
require('bootstrap');

let app = angular.module('app', [
    ngMessages,
    uiRouter,
    angularMaterial,
    ngMdIcons,
    UserService.name,
    ListingService.name,
    AppContent.name,
	ViewIndex.name,
	ViewListingCreate.name,
	ViewListings.name,
    ViewListing.name,
    ViewLogin.name,
    ViewRegister.name,
    ViewYourListings.name,
    ViewListingEdit.name,
    ViewListingsSse.name,
    ViewLegalAdvice.name,
    ViewTutorial.name,
]);

app.directive('equals', function() {
    return {
        restrict: 'A', // only activate on element attribute
        require: '?ngModel', // get a hold of NgModelController
        link: function(scope, elem, attrs, ngModel) {
            if(!ngModel) return; // do nothing if no ng-model

            // watch own value and re-validate on change
            scope.$watch(attrs.ngModel, function() {
                validate();
            });

            // observe the other value and re-validate on change
            attrs.$observe('equals', function (val) {
                validate();
            });

            var validate = function() {
                // values
                var val1 = ngModel.$viewValue;
                var val2 = attrs.equals;

                // set validity
                ngModel.$setValidity('equals', ! val1 || ! val2 || val1 === val2);
            };
        }
    }
});

// TODO: is this even used?
app.filter('compareUsers',function(listing
){
    let currentUser = this.UserService.getCurrentUser();
    // return listing;
    if(listing.user==currentUser)
        return listing;

});

app.constant('API_URL', 'http://127.0.0.1:3000/api');
app.config(Routes);
app.config(Middlewares);


angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [app.name], {
        strictDi: true
    });
});

export default app;