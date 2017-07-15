angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html'
  })
  .controller('app-controller', function($scope) {
    $scope.$ctrl.videos = $scope.videos = window.exampleVideoData;
    $scope.$ctrl.currentVideo = $scope.videos[0];
    $scope.$ctrl.selectVideo = function() {};
    $scope.$ctrl.searchResults = function() {};
  });