export default class User {

  constructor($http, ApiConfig) {
    this._$http = $http
    this._ApiConfig = ApiConfig
    this.currentUser = null
  }
}

/**
 * Inject Dependencies
 */
User.$inject = ['$http']