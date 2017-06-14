'use strict';

import template from './view-index.template.html';


class ViewIndexComponent {
    constructor(){
        this.controller = viewIndexComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewIndex';
    }


}

class viewIndexComponentController{
    constructor($state){
        this.$state = $state;
    }

    static get $inject(){
        return ['$state'];
    }

}

export default ViewIndexComponent;