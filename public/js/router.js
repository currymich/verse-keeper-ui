angular.module('verse-keeper', ['ui.router'])
  .config(authInterceptor)
  .config(VerseRouter)

  function authInterceptor($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor')
  }

  function VerseRouter($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '/partials/home.html'
    })
  }
