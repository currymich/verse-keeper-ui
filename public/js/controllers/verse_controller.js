angular.module('verse-keeper')
.controller('VerseController', ['$scope', '$http', '$state', function($scope, $http, $state){
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
    $state.go('home')
  }

  function save(currentUser){
    $http.post(`${server}/verses/save`, {verse: {text: self.result, user_id: currentUser.id, reference: self.query}})
    .then(function(response){
      console.log(response.data)
    })
  }

  function unsave(verse_id, currentUser){
    $http.delete(`${server}/verses/${verse_id}`)
    .then(function(response){
      console.log(response.data)
    })
    .then(function(){
      user_verses(currentUser)
    })
  }

  function user_verses(currentUser){
    $http.get(`${server}/user/${currentUser.id}/verses`)
    .then(function(response){
      self.saved_verses = response.data.verses
      console.log(response.data.verses)
    })
    $state.go('saved_verses', {user_id: currentUser.id})
  }

  function verse_notes(verse_id){
    $http.get(`${server}/verses/${verse_id}`)
    .then(function(response){
      self.selected_verse = response.data.verse
      console.log(response.data.verse)
    })

    $http.get(`${server}/verse/${verse_id}/notes`)
    .then(function(response){
      self.selected_notes = response.data.notes
      console.log(response.data.notes)
    })
    $state.go('verse_notes', {verse_id: verse_id})
  }

  $scope.$on('update_notes', function(event, verse_id){
    $http.get(`${server}/verse/${verse_id}/notes`)
    .then(function(response){
      self.selected_notes = response.data.notes
      console.log(response.data.notes)
    })
  })

  self.user_verses = user_verses;
  self.verse_notes = verse_notes;
  self.search = search;
  self.save = save;
  self.unsave = unsave;
}])
