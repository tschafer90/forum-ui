import angular from 'angular'

import CategoryService from './category.service'
import ThreadService from './thread.service'

let serviceModule = angular.module('app.services', [])

/**
 * Register services
 */
serviceModule.service('Category', CategoryService)
serviceModule.service('Thread', ThreadService)

/**
 * Export module
 */
export default serviceModule.name
