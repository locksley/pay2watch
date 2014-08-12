'use strict';

/**
 * @ngdoc function
 * @name videoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the videoApp
 */
angular.module('videoApp')
  .controller('AboutCtrl', function($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
