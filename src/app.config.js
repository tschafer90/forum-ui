/**
 * Routing config
 * @param $urlRouterProvider
 * @param $locationProvider
 */
export function routing ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/forum')
}

/**
 * Api config
 * @type {{base_url: string}}
 */
export const api = {
  base_url: 'http://forum.api/api/v1'
}

/**
 * Inject Dependencies
 */
routing.$inject = ['$urlRouterProvider', '$locationProvider']
