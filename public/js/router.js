angular.module('verse-keeper', ['ui.router', 'ngSanitize'])
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
    .state('saved_verses', {
      url: '/user/:user_id/verses',
      templateUrl: '/partials/saved_verses.html'
    })
    .state('verse_notes', {
      url: '/verse/:verse_id/notes',
      templateUrl: '/partials/verse_notes.html'
    })
  }
