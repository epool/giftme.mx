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
    'ngTouch',
    'ngMaterial'
  ])
  .constant('ServerUrl', 'http://epool.koding.io')
  .config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/GiftExchange', {
        templateUrl: 'views/gift-exchange.html',
        controller: 'GiftExchangeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/gift-exchange', {
        templateUrl: 'views/gift-exchange.html',
        controller: 'GiftExchangeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
      // use the HTML5 History API
      $locationProvider.html5Mode(true);
      
      $mdThemingProvider.alwaysWatchTheme(true);
  });
