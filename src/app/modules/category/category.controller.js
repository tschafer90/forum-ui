export default class CategoryController {
  constructor (Category, $transition$) {
    /**
     * Get Category with threads, thread author, most recent comment and author
     */
    Category.get($transition$.params().categoryId, ['threads.user', 'threads.mostRecentComment.user']).then(
      (response) => (this.current = response.data)
    )
  }
}

/**
 * Inject Dependencies
 */
CategoryController.$inject = ['Category', '$transition$']
