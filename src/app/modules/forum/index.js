import angular from 'angular'
import uiRouter from '@uirouter/angularjs'

import routing from './forum.routes'
import ForumController from './forum.controller'

/**
 * Export Forum module
 */
export default angular.module('app.forum', [uiRouter])
  .config(routing)
  .controller('ForumController', ForumController)
  .name
