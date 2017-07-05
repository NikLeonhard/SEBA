'use strict';

import template from './view-tutorial.template.html';
import './view-tutorial.style.css';


class ViewTutorialComponent {
    constructor(){
        this.controller = viewTutorialComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewTutorial';
    }


}

class viewTutorialComponentController {
    constructor($state){
        this.$state = $state;
    }
	
    static get $inject(){
        return ['$state'];
    }

	static get logoURL() {
		return '/img/logo.png';	
	}
}

export default ViewTutorialComponent;