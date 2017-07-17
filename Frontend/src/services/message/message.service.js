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
        return this.$http.put(url, message).then(response => {

            return new Promise((resolve, reject) => {
                resolve(response.data);
            });

        })
    }

	listConversations() {
		let url = this.resourceUrl;
		return this.$http.get(url).then(response => {
			return new Promise((resolve, reject) => {
				resolve(response.data);
			})
		})
	}
	
	listMessages(id) {
        let url = this.resourceUrl;
        return this.$http.get(url).then(response => {

            return new Promise((resolve, reject) => {
                resolve(response.data);
            });

        });

    }
}


