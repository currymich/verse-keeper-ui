angular.module('verse-keeper')
.controller('AuthController', ['$http', '$scope', '$state', 'AuthTokenFactory', function($http, $scope, $state, AuthTokenFactory){
  var self = this;
  var server = process.env.RAILS_SERVER || 'http://localhost:3000'

  function login(user){
    $http.post(`${server}/users/login`, {user})
    .then(function(response){
      if(response.data.status == 201){
        console.log(response.data)
        AuthTokenFactory.setToken(response.data.token)
        $scope.$emit('userLoggedIn', response.data.user);
        $state.go('home')
      } else {
        console.log(response.data.message)
      }
    })
  }

  function signup(user){
    $http.post(`${server}/users`, {user})
    .then(function(response){
      if(response.data.status == 200) {
        console.log(response.data.message)
        AuthTokenFactory.setToken(response.data.token)
        $scope.$emit('userLoggedIn', response.data.user)
        $state.go('home')
      } else {
        console.log(response.data.message);
      }
    })
  }

  function logout(){
    AuthTokenFactory.setToken()

    $scope.$emit('userLoggedOut');
    $state.go('home')
  }

  self.logout = logout;
  self.login = login;
  self.signup = signup;
}])
