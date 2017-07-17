'use strict';


export default class UserService {

    static get $inject(){
        return ['$http', '$window','API_URL'];
    }

    constructor($http,$window,API_URL) {
        this.$http = $http;
        this.$window = $window;
        this.API_URL = API_URL;

    }

    static get name(){
        return 'userService';
    }

    signup(user) {
        return this.$http.post(`${ this.API_URL }/users/signup`, user);
    }

    login(user, pass) {
        return this.$http.post(`${ this.API_URL }/users/login`, {
            username: user,
            password: pass
        });
    }

    logout(){
        this.$window.localStorage.removeItem('jwtToken');
    }

    getCurrentUser() {
        let token = this.$window.localStorage['jwtToken'];
        if (!token) return {};

        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(this.$window.atob(base64)).user;
    }

    getUserById(userId) {
        let url = `${ this.API_URL }/users/${userId}`;
        return this.$http.get(url).then(response => {
            return new Promise((resolve, reject) => {
                resolve(response.data);
            });
        });
    }

    isAuthenticated() {
        return !!this.$window.localStorage['jwtToken'];
    }
}