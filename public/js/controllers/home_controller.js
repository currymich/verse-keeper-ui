function HomeController($scope, $http, $sce) {
  var self = this;
  var server = 'http://localhost:3000'
  self.interval = null;

  $scope.$on('userLoggedIn', function(event, user){
    self.currentUser = user;
  });

  $scope.$on('userLoggedOut', function(event){
    self.currentUser = '';
    console.log(`User logged out from home controller`)
  })

  function intervalCheck(){
    if (self.interval == null){
      //if no server pull has been made for VOTD, an interval will be set and the verse controller will be told to query the server
      getVOTD()

      console.log('interval set')
      self.interval = moment().add(1, 'minute')
    } else if (self.interval.isBefore(moment())) {
       //triggered if the duration since the last pull has passed (ie nextFetch is no longer after current time)
      getVOTD()

      console.log('1 minute has passed!')
      self.interval = moment().add(1, 'minute')
      console.log('new interval set')
    }
  }

  intervalCheck()

  function getVOTD(){
    $http.get(`${server}/verses/votd`)
    .then(function(response){
      var raw_verse = response.data.channel.item[0].content_encoded
      var cleaned_verse = raw_verse.split(/&[lr]dquo;/)[1]
      var verse_title = response.data.channel.item[0].title
      var verse = `<h3>${verse_title}</h3><p>${cleaned_verse}</p>`

      self.votd = $sce.trustAsHtml(verse)
    })
  }

}
