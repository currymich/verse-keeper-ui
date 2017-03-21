angular.module('verse-keeper')
.controller('HomeController', ['$scope', '$http', function($scope, $http){
  var self = this;
  var server = 'http://localhost:3000'

  $scope.$on('userLoggedIn', function(event, user){
    self.currentUser = user;
  });

  $scope.$on('userLoggedOut', function(event){
    self.currentUser = '';
    console.log(`User logged out from home controller`)
  })

  getVOTD();

  var threeHours = 1000 * 60 * 60 * 3;
  var checkUpdates = setInterval(function(){
    getVOTD()
  }, threeHours)


  function getVOTD(){
    $http.get(`${server}/verses/votd`)
    .then(function(response){
      var raw_verse = response.data.channel.item[0].content_encoded
      var cleaned_verse = raw_verse.split(/&[lr]dquo;/)[1]
      var verse_title = response.data.channel.item[0].title

      self.votd = `<h3>${verse_title}</h3><p>${cleaned_verse}</p>`
    })
  }
}])
