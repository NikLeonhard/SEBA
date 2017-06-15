'use strict';


export default class ListingService {

    static get $inject() {
        return ['$http', 'API_URL'];
    }

    constructor($http, API_URL) {
        this.$http = $http;
        this.resourceUrl = `${ API_URL }/listings/`;

    }

    static get name() {
        return 'listingService';
    }

    create(listing) {
        let url = this.resourceUrl;
        return this.$http.post(url,listing).then(response => {

            return new Promise((resolve, reject) => {
                resolve(response.data);
            });

        })
    }
}


