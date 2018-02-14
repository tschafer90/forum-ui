export default class ForumController {
  constructor (Category) {
    /**
     * Get all Categories
     */
    Category.getAll().then(
      (response) => (this.categories = response.data)
    )
  }
}

/**
 * Inject Dependencies
 */
ForumController.$inject = ['Category']
