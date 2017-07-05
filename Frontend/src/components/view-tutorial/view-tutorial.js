'use strict';

import angular from 'angular';

import ViewTutorialComponent from './view-tutorial.component';


export default angular.module('ViewTutorial', [])
    .component(ViewTutorialComponent.name, new ViewTutorialComponent);