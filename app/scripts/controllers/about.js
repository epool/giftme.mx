'use strict';

/**
 * @ngdoc function
 * @name giftmemxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the giftmemxApp
 */
angular.module('giftmemxApp')
  .controller('AboutCtrl', function ($scope, $mdSidenav) {
    $scope.active = true;
    $scope.toggleColor = function() {
      $scope.active = !$scope.active;
    };
    
    $scope.toggleRight = function() {
      $mdSidenav('right').toggle();
    };
  });