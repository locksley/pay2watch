'use strict';

/**
 * @ngdoc function
 * @name videoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videoApp
 */
angular.module('videoApp').controller('MainCtrl', function($scope) {
  $scope.address = "13PvFCHQukb2gPm66uCeN7nhbNY3eGwGVM"
  $scope.locked = true

  var opts = {
    lines: 15, // The number of lines to draw
    length: 40, // The length of each line
    width: 2, // The line thickness
    radius: 30, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: 'gray', // #rgb or #rrggbb or array of colors
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2000000000, // The z-index (defaults to 2000000000)
    top: '50%', // Top position relative to parent
    left: '50%' // Left position relative to parent
  };
  var target = document.getElementById('spinner');
  var spinner = new Spinner(opts).spin(target);

  var ws = new WebSocket("wss://socket-mainnet.helloblock.io")

  ws.onopen = function() {
    console.log("CONNECTED")

    ws.send(JSON.stringify({
      "op": "subscribe",
      "channel": "addresses/transactions",
      "filters": [$scope.address]
    }))
  }

  ws.onmessage = function(e) {
    var data = JSON.parse(e.data)
    console.log(data)
    if (data.op !== "broadcast") return
    beep()

    $scope.$apply(function() {
      $scope.locked = false
    })

    spinner.stop()

    setTimeout(function() {
      play()
    }, 0)
  }

  function beep() {
    var file = "/images/beep.wav";
    (new Audio(file)).play()
  }

  function play() {
    var vid = document.getElementById("video");
    video.setAttribute("controls", "controls")
    vid.play()
  }

});
