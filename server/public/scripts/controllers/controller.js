//controller for home page;
app.controller('homeController', ['$scope', '$http', function($scope, $http){
  console.log('homeController is ON!');

  //create an empty array to send hero to DB;
  $scope.newHero = {};

  //array of superPowers that will populate the dropdown;
  $scope.superPowers = ['Invisibility', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Accelerated Healing', 'Power Blast', 'Animal Affinity'];

  //function will post on button submit;
  $scope.submitHero = function(){
    var data = $scope.newHero;

    $http.post('/heroes', data)
    .then(function(){
      //check to see which hero is sent to the DB;
      console.log('new hero POST to /heroes: ', data);
    })
  }

}]);

//controller for heroes display;
app.controller('displayController', ['$scope', '$http', function($scope, $http){
  console.log('displayController is ON!');

  //get request when page loads;
  getHeroes();

  //delete function/request on button click
  $scope.deleteHero = function(id){
    $http.delete('/heroes/' + id)
    .then(function(){
      console.log('S/he gone, DELETE from /heroes/', id);
      getHeroes();
    });
  };

  //GET request;
  function getHeroes() {
    $http.get('/heroes')
    .then(function (response) {
      console.log('this is what I am GETing from /heroes:', response.data);

      var heroesArray = response.data;

      $scope.heroes = heroesArray;
      console.log(heroesArray);
    });
  }


}]);
