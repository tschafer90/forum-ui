export default function routes ($stateProvider) {
  /**
   * Register Thread state
   */
  $stateProvider.state('thread', {
    url: '/thread/{threadId}',
    template: require('./thread.html'),
    controller: 'ThreadController',
    controllerAs: 'thread'
  })
}

/**
 * Inject Dependencies
 */
routes.$inject = ['$stateProvider']
