'use strict';

/**
 * @ngdoc function
 * @name giftmemxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the giftmemxApp
 */
angular.module('giftmemxApp')
  .controller('MainCtrl', function ($scope, $mdDialog, $mdToast) {
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
    
    $scope.alert = '';
    $scope.dialogBasic = function(ev) {
      $mdDialog.show({
        templateUrl: 'views/add-participant-dialog.html',
        targetEvent: ev,
        controller: 'DialogController'
      }).then(function(answer) {
        $scope.addParticipant(answer);
        //$scope.complexToastIt();
      }, function() {
        // Code for cancelling the dialog
      });
    };
    
    
    $scope.toastPosition = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };
    $scope.getToastPosition = function() {
      return Object.keys($scope.toastPosition)
        .filter(function(pos) {
          return $scope.toastPosition[pos];
        }).join(' ');
    };
    $scope.complexToastIt = function() {
      $mdToast.show({
        controller: 'ToastCtrl',
        templateUrl: 'views/participant-added-toast.html',
        hideDelay: 6000,
        position: $scope.getToastPosition()
      });
    };
  })
  .controller('ToastCtrl', function($scope, $mdToast) {
    $scope.closeToast = function() {
      $mdToast.hide();
    };
  })
  .controller('DialogController', function($scope, $mdDialog) {
    $scope.participant = {
      firstName: 'eduardo',
      lastName: 'pool',
      email: 'eduardo@gmail.com'
    };
    
    $scope.hide = function() {
      $mdDialog.hide($scope.participant);
    };
  
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  });