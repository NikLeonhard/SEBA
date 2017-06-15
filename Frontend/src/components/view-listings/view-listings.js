/**
 * Created by Fabian on 15.06.2017.
 */
import angular from 'angular';

import ViewListingsComponent from './view-listings.component';

export default angular.module('ViewListings', [])
    .component(ViewListingsComponent.name, new ViewListingsComponent);