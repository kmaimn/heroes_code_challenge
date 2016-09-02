var app = angular.module('heroApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

  //partials;
  $routeProvider.
    when('/display', {
      templateUrl: '/views/partials/display.html',
      controller: 'displayController'
    }).
    when('/home', {
      templateUrl: '/views/partials/home.html',
      controller: 'homeController'
    }).
    otherwise({
      redirectTo: "/home"
    });
}]);
