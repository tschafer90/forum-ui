export default class ThreadController {
  constructor (Thread, $transition$) {
    /**
     * Get Thread with author, category, and comments with authors
     */
    Thread.get($transition$.params().threadId, ['user', 'category', 'comments.user']).then(
      (response) => (this.current = response.data)
    )
  }
}

/**
 * Inject Dependencies
 */
ThreadController.$inject = ['Thread', '$transition$']
