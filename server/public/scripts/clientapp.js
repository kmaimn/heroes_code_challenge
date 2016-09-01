var app = angular.module('heroApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  //partials;
  $routeProvider.
    when('/display', {
      templateUrl: '/public/views/partials/display.html',
      controller: 'displayController'
    }).
    when('/home', {
      templateUrl: '/public/views/partials/home.html',
      controller: 'homeController'
    otherwise({
      redirectTo: "/home"
    });
}]);
