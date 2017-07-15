angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html'
  })
  .service('AppService', function($http) {
    videos = window.exampleVideoData;
  })
  .controller('app-controller', function($scope) {

    $scope.$ctrl.currentVideo = $scope.videos[0];
    $scope.$ctrl.selectVideo = function() {};
    $scope.$ctrl.searchResults = function() {};
  });