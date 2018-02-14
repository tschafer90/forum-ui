export default class Category {
  constructor ($http, ApiConfig) {
    this._$http = $http
    this._ApiConfig = ApiConfig
  }

  /**
   *
   * @returns {*|PromiseLike<T>|Promise<T>}
   */
  getAll () {
    let url = this._ApiConfig.base_url + '/categories'
    return this._$http.get(url).then(
      (response) => response.data
    )
  }

  /**
   *
   * @param categoryId
   * @param includes
   * @returns {*|PromiseLike<T>|Promise<T>}
   */
  get (categoryId, includes = null) {
    let url = this._ApiConfig.base_url + '/categories/' + categoryId + ((includes) ? '?include=' + includes.join(',') : '')
    return this._$http.get(url).then(
      (response) => response.data
    )
  }
}

/**
 * Inject Dependencies
 */
Category.$inject = ['$http', 'ApiConfig']
