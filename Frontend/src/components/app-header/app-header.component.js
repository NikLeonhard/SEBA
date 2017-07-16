
'use strict';

import UserService from './../../services/user/user.service';

import template from './app-header.template.html';

import './app-header.style.css';

class AppHeaderComponent {
    constructor(){
        this.controller = AppHeaderComponentController;
        this.template = template;

    }

    static get name() {
        return 'appHeader';
    }


}

class AppHeaderComponentController{
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
    }

    openMenu($mdMenu, ev) {
        $mdMenu.open(ev);
    }

    isAuthenticated(){
        return this.UserService.isAuthenticated();
    }

    getCurrentUser(){
        let user = this.UserService.getCurrentUser();
        return user.username;
    }


    goHome(){
        this.$state.go('index',{});
    }

	newListing(){
        if (this.UserService.isAuthenticated()) {
            this.$state.go('listingAdd',{});
        } else {
            this.$state.go('login',{});
		}
    }

    viewYourListings(){
	    if(this.UserService.isAuthenticated()){
	        this.$state.go('viewYourListings',[]);}
	        else{
        this.$state.go('login',[])}
    }

    login(){
        this.$state.go('login',{});
    }

    register(){
        this.$state.go('register',{});
    }

    logout(){
        this.UserService.logout();
        this.$state.go('index',{});
    }

    findSponsors(){
        this.$state.go('viewListings',{});
    }

    findSponsorSeekers(){
        this.$state.go('viewListingsSse',{});
    }

    viewLegalAdvice(){
        this.$state.go('viewLegalAdvice',{});
    }

    viewTutorial(){
        this.$state.go('viewTutorial',[]);
    }

    viewMessages(){
        this.$state.go('viewMessages',[]);
    }

    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default AppHeaderComponent;