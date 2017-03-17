angular.module('verse-keeper', ['ui.router'])
  .config(authInterceptor)
  .config(VerseRouter)

  function authInterceptor($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor')
  }

  function VerseRouter($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/partials/home.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/partials/login.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/partials/signup.html'
    })
  }
