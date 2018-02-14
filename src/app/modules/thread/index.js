import angular from 'angular'
import uiRouter from '@uirouter/angularjs'

import routing from './thread.routes'
import ThreadController from './thread.controller'

/**
 * Export Thread module
 */
export default angular.module('app.thread', [uiRouter])
  .config(routing)
  .controller('ThreadController', ThreadController)
  .name
