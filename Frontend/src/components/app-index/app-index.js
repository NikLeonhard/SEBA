
'use strict';

import angular from 'angular';

import AppHeader from './../app-header/app-header';
import AppFooter from './../app-footer/app-footer';



export default angular.module('AppView', [
    AppHeader.name,
    AppFooter.name
])
    .component(AppIndexComponent.name, new AppIndexComponent)