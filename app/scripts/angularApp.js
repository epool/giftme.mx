'use strict';

/**
 * @ngdoc overview
 * @name giftmemxApp
 * @description
 * # giftmemxApp
 *
 * Main module of the application.
 */
angular
  .module('giftmemxApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('ServerUrl', 'http://epool.koding.io')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
      // use the HTML5 History API
      $locationProvider.html5Mode(true);
  })
  .controller('AppCtrl', function ($scope, $location) {
    $scope.goTo = function(path) {
      $location.path(path);
      $scope.togglePanel();
    };
    
    $scope.togglePanel = function() {
      var drawerPanel = document.getElementById('drawerPanel');
      drawerPanel.togglePanel();
    };
    
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });