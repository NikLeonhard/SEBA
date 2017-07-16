
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-register.template.html';
import './view-register.style.css';

class ViewRegisterComponent {
    constructor(){
        this.controller = ViewRegisterComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewRegister';
    }


}

class ViewRegisterComponentController{
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
    }

    $onInit() {
        this.registration = {};
        this.usernameExists = false;
    }

    submit(){
        let newUser = this.registration;

         // remove focus (e.g. from input field)
         document.activeElement.blur();

        this.UserService.signup(newUser).then(()=> {
            this.usernameExists = false;
            this.$state.go('index',{});
        }, response => {
            if (response.status === 400 && response.data.code === 11000) {
                console.log("username already in use");
                this.existingUsername = this.registration.username;
                this.usernameExists = true;
                this.clearCredentials();
            }
        });
    }

    clearCredentials() {
        this.registration.username = null;
        this.registration.password = null;
        this.registrationForm.$setPristine();
        this.registrationForm.$setUntouched();
    }

    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewRegisterComponent;