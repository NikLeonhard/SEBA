'use strict';

import angular from 'angular';

import ViewListingEditComponent from './view-listing-edit.component';


export default angular.module('ViewListingEdit', [])
    .component(ViewListingEditComponent.name, new ViewListingEditComponent);