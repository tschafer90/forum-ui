import angular from 'angular'
import uiRouter from '@uirouter/angularjs'

import { routing, api } from './app.config'

/**
 * Import modules
 */
import services from './app/services'
import forum from './app/modules/forum'
import category from './app/modules/category'
import thread from './app/modules/thread'

/**
 * App module
 */
angular.module('app', [uiRouter, services, forum, category, thread])
  .config(routing)
  .constant('ApiConfig', api)
