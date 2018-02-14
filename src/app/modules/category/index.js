import angular from 'angular'
import uiRouter from '@uirouter/angularjs'

import routing from './category.routes'
import CategoryController from './category.controller'

/**
 * Export Category module
 */
export default angular.module('app.category', [uiRouter])
  .config(routing)
  .controller('CategoryController', CategoryController)
  .name
