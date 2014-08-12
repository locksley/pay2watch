'use strict';

/**
 * @ngdoc overview
 * @name videoApp
 * @description
 * # videoApp
 *
 * Main module of the application.
 */
angular
  .module('videoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($locationProvider) {
    $locationProvider
      .html5Mode(true)
      .hashPrefix("!")
  });
