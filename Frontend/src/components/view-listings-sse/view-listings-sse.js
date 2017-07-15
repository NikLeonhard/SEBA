/**
 * Created by Fabian on 29.06.2017.
 */

import angular from 'angular';

import ViewListingsSseComponent from './view-listings-sse.component';

export default angular.module('ViewListingsSse', [])
    .component(ViewListingsSseComponent.name, new ViewListingsSseComponent);