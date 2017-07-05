'use strict';

import template from './view-legal-advice.template.html';
import './view-legal-advice.style.css';


class ViewLegalAdviceComponent {
    constructor(){
        this.controller = viewLegalAdviceComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewLegalAdvice';
    }


}

class viewLegalAdviceComponentController {
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

export default ViewLegalAdviceComponent;