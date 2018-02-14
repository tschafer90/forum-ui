export default function routes ($stateProvider) {
  /**
   * Register Forum state
   */
  $stateProvider.state('forum', {
    url: '/forum',
    template: require('./forum.html'),
    controller: 'ForumController',
    controllerAs: 'forum'
  })
}

/**
 * Inject Dependencies
 */
routes.$inject = ['$stateProvider']
