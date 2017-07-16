'use strict';


export default class MessageService {

    static get $inject() {
        return ['$http', 'API_URL'];
    }

    constructor($http, API_URL) {
        this.$http = $http;
        this.resourceUrl = `${ API_URL }/messages/`;

    }

    static get name() {
        return 'messageService';
    }

    create(message) {
        let url = this.resourceUrl;
        return this.$http.post(url, message).then(response => {

            return new Promise((resolve, reject) => {
                resolve(response.data);
            });

        })
    }

    save(message) {
        let url = this.resourceUrl;
        return this.$http.post(url, message).then(response => {

            return new Promise((resolve, reject) => {
                resolve(response.data);
            });

        })
    }




	/*
    list() {

        let url = this.resourceUrl;
        return this.$http.get(url).then(response => {

            return new Promise((resolve, reject) => {
                resolve(response.data);
            });

        });

    }

    delete(id) {
        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.delete(url).then(response => {

            return new Promise((resolve, reject) => {
                resolve(response.status);
            });

        })
    }

    get(id) {
        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.get(url).then(response => {

            return new Promise((resolve, reject) => {
                resolve(response.data);
            });

        })
    }

    save(listing) {
        let url = this.resourceUrl;
        return this.$http.put(url,listing).then(response => {

            return new Promise((resolve, reject) => {
                resolve(response.data);
            });

        })
    }
	*/
}


