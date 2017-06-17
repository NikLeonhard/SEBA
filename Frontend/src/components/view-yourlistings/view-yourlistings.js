/**
 * Created by Fabian on 15.06.2017.
 */
import angular from 'angular';

import ViewYourListingsComponent from './view-yourlistings.component';

export default angular.module('ViewYourListings', [])
    .component(ViewYourListingsComponent.name, new ViewYourListingsComponent);