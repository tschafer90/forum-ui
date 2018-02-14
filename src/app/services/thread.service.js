export default class Thread {
  /**
   *
   * @param $http
   * @param ApiConfig
   */
  constructor ($http, ApiConfig) {
    this._$http = $http
    this._ApiConfig = ApiConfig
  }

  /**
   *
   * @param threadId
   * @param includes
   * @returns {*|PromiseLike<T>|Promise<T>}
   */
  get (threadId, includes = null) {
    let url = this._ApiConfig.base_url + /threads/ + threadId + ((includes) ? '?include=' + includes.join(',') : '')
    return this._$http.get(url).then(
      (response) => response.data
    )
  }
}

/**
 * Inject Dependencies
 */
Thread.$inject = ['$http', 'ApiConfig']
