angular.module('verse-keeper')
  .controller('AuthController', AuthController)
  .controller('HomeController', HomeController)
  .factory('AuthTokenFactory', AuthTokenFactory)
  .factory('AuthInterceptor', AuthInterceptor)
