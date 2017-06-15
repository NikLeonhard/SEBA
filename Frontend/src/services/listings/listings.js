'use strict';

import angular from 'angular';

import ListingService from './listings.service';


export default angular.module('ListingsServiceDefinition', [])
    .service(ListingService.name, ListingService)