function HomeController($scope) {
  var self = this;

  $scope.$on('userLoggedIn', function(event, user) {
    self.currentUser = user;
  });

  $scope.$on('userLoggedOut', function(event){
    self.currentUser = '';
    console.log(`User logged out from home controller`)
  })
}
