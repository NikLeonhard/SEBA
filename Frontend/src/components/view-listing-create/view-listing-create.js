'use strict';

import angular from 'angular';

import ViewListingCreateComponent from './view-listing-create.component';


export default angular.module('ViewListingCreate', [])
    .component(ViewListingCreateComponent.name, new ViewListingCreateComponent);