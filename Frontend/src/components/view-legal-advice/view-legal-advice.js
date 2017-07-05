'use strict';

import angular from 'angular';

import ViewLegalAdviceComponent from './view-legal-advice.component';


export default angular.module('ViewLegalAdvice', [])
    .component(ViewLegalAdviceComponent.name, new ViewLegalAdviceComponent);