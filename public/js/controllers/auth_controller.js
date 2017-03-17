function AuthController($http, $state, $scope,  AuthTokenFactory){
  var self = this;
  var server = 'http://localhost:3000'

  function login(user){
    $http.post(`${server}/users/login`, {user})
    .then(function(response){
      AuthTokenFactory.setToken(response.data.token)
      $scope.$emit('userLoggedIn', response.data.user);
      $state.go('home')
    })
  }

  function signup(user){
    $http.post(`${server}/users`, {user})
    .then(function(response){
      AuthTokenFactory.setToken(response.data.token)
      $scope.$emit('userLoggedIn', response.data.user)
      $state.go('home')
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
}
