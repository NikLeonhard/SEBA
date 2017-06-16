/**
 * Created by Fabian on 16.06.2017.
 */
'use strict';

import angular from 'angular';

import ViewListingComponent from './view-listing.component';


export default angular.module('ViewListing', [])
    .component(ViewListingComponent.name, new ViewListingComponent);