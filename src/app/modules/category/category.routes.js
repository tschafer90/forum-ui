export default function routes ($stateProvider) {
  /**
   * Register Category state
   */
  $stateProvider.state('category', {
    url: '/category/{categoryId}',
    template: require('./category.html'),
    controller: 'CategoryController',
    controllerAs: 'category'
  })
}

/**
 * Inject Dependencies
 */
routes.$inject = ['$stateProvider']
