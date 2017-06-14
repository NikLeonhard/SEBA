'use strict';

import angular from 'angular';

import ViewIndexComponent from './view-index.component';


export default angular.module('ViewIndex', [])
    .component(ViewIndexComponent.name, new ViewIndexComponent);