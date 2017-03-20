angular.module('verse-keeper')
.controller('VerseController', ['$scope', '$http', function($scope, $http){
  var self = this;
  var server = 'http://localhost:3000'

  function search(){
    var url = self.query.split(' ')

    // goo.gl/3PEUEV - book search needs to be in one word format (ie 1 John > 1john), if the first character is found to be a number, combine
    if (!isNaN(url[0])){
      var num = url.shift()
      url[0] = num + url[0]
    }
    url = url.join('/')

    $http.get(`${server}/verses/search/eng-ESV/${url}`)
    .then(function(response){
      self.result = response.data.result
    })
  }

  self.search = search;
}])
