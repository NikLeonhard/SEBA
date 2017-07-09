
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-login.template.html';
import './view-login.style.css';

class ViewLoginComponent {
    constructor(){
        this.controller = ViewLoginComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewLogin';
    }


}

class ViewLoginComponentController{
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
    }

    $onInit() {
        this.login = {};
        this.invalidCredentials = false;
    }

    submit() {
        let user = this.login.username;
        let password = this.login.password;

        // remove focus (e.g. from input field)
        document.activeElement.blur();

        this.UserService.login(user,password).then(()=> {
            this.invalidCredentials = true;
            this.$state.go('index',{});
        }, response => {
            if (response.status === 401) {
                this.invalidCredentials = true;
                this.clearInputs();
            }
        });
    }

    /*reset input form*/
    clearInputs() {
        this.login = {};
        this.loginForm.$setPristine();
        this.loginForm.$setUntouched();
    }

    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewLoginComponent;