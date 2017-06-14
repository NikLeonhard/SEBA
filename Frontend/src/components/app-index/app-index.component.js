
'use strict';

import template from './app-index.template.html';

class AppIndexComponent {
    constructor(){
        this.controller = AppIndexComponentController;
        this.template = template;

    }

    static get name() {
        return 'AppIndexContent';
    }


}

class AppIndexComponentController{
    constructor(){

    }

}


export default AppIndexComponent;
