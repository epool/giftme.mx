'use strict';

/**
 * @ngdoc function
 * @name giftmemxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the giftmemxApp
 */
angular.module('giftmemxApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.goTo = function(path) {
      $location.path(path);
    };
  });