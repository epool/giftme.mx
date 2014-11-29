'use strict';

/**
 * @ngdoc function
 * @name giftmemxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the giftmemxApp
 */
angular.module('giftmemxApp')
  .controller('MainCtrl', function ($scope) {
    $scope.name = 'eduardo';
    
    $scope.participants = [{
      firstName: 'eduardo',
      lastName: 'pool',
      email: 'eduardo@gmail.com'
    },
    {
      firstName: 'eduardo',
      lastName: 'pool',
      email: 'eduardo@gmail.com'
    },
    {
      firstName: 'eduardo',
      lastName: 'pool',
      email: 'eduardo@gmail.com'
    },{
      firstName: 'eduardo',
      lastName: 'pool',
      email: 'eduardo@gmail.com'
    },
    {
      firstName: 'eduardo',
      lastName: 'pool',
      email: 'eduardo@gmail.com'
    },
    {
      firstName: 'eduardo',
      lastName: 'pool',
      email: 'eduardo@gmail.com'
    }];
    
    $scope.addParticipant = function (participant) {
      $scope.participants.push(participant);
    };
    $scope.removeParticipant = function (participant) {
      var index = $scope.participants.indexOf(participant);
      $scope.participants.splice(index, 1);
    };
  });