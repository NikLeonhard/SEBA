import angular from 'angular';

import ViewMessagesComponent from './view-messages.component';

export default angular.module('ViewMessages', [])
    .component(ViewMessagesComponent.name, new ViewMessagesComponent);