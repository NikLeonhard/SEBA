'use strict';

import angular from 'angular';

import MessageService from './message.service';


export default angular.module('MessageServiceDefinition', [])
    .service(MessageService.name, MessageService)