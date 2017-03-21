angular.module('verse-keeper')
.controller('NotesController', ['$http', '$state', '$scope',
function($http, $state, $scope){
  var self = this;
  var server = process.env.RAILS_SERVER || 'http://localhost:3000'


  function new_note(verse_id){
    $http.post(`${server}/notes/`, {note: {text: self.note_text, verse_id: verse_id}})
    .then(function(response){
      console.log(response.data.note)
      $scope.$emit('update_notes', verse_id)
      self.note_text = ''
    })
  }

  function edit_note(note){
    $http.patch(`${server}/notes/${note.id}`, {note: {text: self.note_text, note_id: note.id}})
    .then(function(response){
      $scope.$emit('update_notes', note.verse_id)
      self.note_text = ''
    })
  }

  function delete_note(note){
    $http.delete(`${server}/notes/${note.id}`)
    .then(function(response){
      $scope.$emit('update_notes', note.verse_id)
    })
  }

  self.delete_note = delete_note;
  self.edit_note = edit_note;
  self.new_note = new_note
}])
