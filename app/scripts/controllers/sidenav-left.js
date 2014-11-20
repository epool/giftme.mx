'use strict';

/**
 * @ngdoc function
 * @name giftmemxApp.controller:SidenavLeftCtrl
 * @description
 * # SidenavLeftCtrl
 * Controller of the giftmemxApp
 */
angular.module('giftmemxApp')
  .controller('SidenavLeftCtrl', function($scope, $timeout, $mdSidenav, $location) {
    $scope.close = function() {
      $mdSidenav('left').close();
    };
    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle();
    };
    $scope.goTo = function(index) {
      switch(index) {
        case 0:
          $location.path('/');
          break;
        case 1:
          $location.path('/about');
          break;
        default:
          $location.path('/');
      }
      $scope.close();
    };
  });