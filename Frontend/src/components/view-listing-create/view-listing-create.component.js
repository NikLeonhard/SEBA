
'use strict';

import template from './view-listing-create.template.html';

// import MoviesService from './../../services/movies/movies.service';
// import UserService from './../../services/user/user.service';

class ViewListingCreateComponent {
    constructor(){
        this.controller = ViewListingCreateComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewListingCreate';
    }
}

class ViewListingCreateComponentController {
    constructor($state/*, MoviesService,UserService*/){
        this.title = {};
        this.$state = $state;
        //this.MoviesService = MoviesService;
        //this.UserService = UserService;
    }

    cancel() {
        this.$state.go('index',{});
    };

	/*
    save() {
        let user = this.UserService.getCurrentUser();

        this.movie['user'] = user['_id'];
        this.MoviesService.create(this.movie).then(data => {
            let _id = data['_id'];
            this.$state.go('movie',{ movieId:_id});
        });

    };
*/

    static get $inject(){
        return ['$state'/*, MoviesService.name, UserService.name*/];
    }

}


export default ViewListingCreateComponent;