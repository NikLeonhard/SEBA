'use strict';

import ViewIndexComponent from './../components/view-index/view-index.component';
import LoginComponent from './../components/view-login/view-login.component';
import RegisterComponent from './../components/view-register/view-register.component';
import ViewListingCreateComponent from './../components/view-listing-create/view-listing-create.component';
import ViewListingsComponent from './../components/view-listings/view-listings.component';
import ViewListingComponent from './../components/view-listing/view-listing.component';
import ViewYourListingsComponent from './../components/view-yourlistings/view-yourlistings.component';
import ViewListingEditComponent from './../components/view-listing-edit/view-listing-edit.component';
import ViewListingsSseComponent from './../components/view-listings-sse/view-listings-sse.component';
import ViewLegalAdviceComponent from './../components/view-legal-advice/view-legal-advice.component';
import ViewTutorialComponent from './../components/view-tutorial/view-tutorial.component';
import ViewMessagesComponent from './../components/view-messages/view-messages.component';

import ListingsService from './../services/listings/listings.service';
import MessageService from './../services/message/message.service';

resolveListing.$inject = ['$stateParams', ListingsService.name];
function resolveListing($stateParams,listingsService){
	return listingsService.get($stateParams.listingId);
}

resolveListings.$inject = [ListingsService.name];
function resolveListings(listingsService){
	return listingsService.list();
}

resolveConversations.$inject = [MessageService.name];
function resolveConversations(messageService){
    return messageService.listConversations();
}

resolveMessages.$inject = [MessageService.name];
function resolveMessages(messageService){
    return messageService.listMessages();
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
		.state('register', {
		url: '/register',
		component: RegisterComponent.name,
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

		.state('viewListingEdit',{
		url:'/viewListingEdit/:listingId',
		component: ViewListingEditComponent.name,
		resolve:{
			listing: resolveListing
		}
	})
		.state('viewListingsSse', {
		url: '/viewListingsSponsorSeekers',
		component: ViewListingsSseComponent.name,
		resolve:{
			listings: resolveListings}
	})
		.state('viewLegalAdvice',{
		url: '/viewLegalAdvice',
		component: ViewLegalAdviceComponent.name,
	})
		.state('viewTutorial',{
		url: '/viewTutorial',
		component: ViewTutorialComponent.name,
	})
		.state('viewMessages', {
		url: '/viewMessages',
		component: ViewMessagesComponent.name,
		resolve:{
			messages: resolveMessages,
			conversations: resolveConversations
		}
	})
}

