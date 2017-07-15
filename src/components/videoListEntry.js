angular.module('video-player')

  .component('videoListEntry', {
    bindings: {
      video: '<',
    },
    templateUrl: 'src/templates/videoListEntry.html'
  })
  .controller('video-list-entry-controller', function($scope) {
    // $scope.snippet = video.snippet;	

    // $scope.thumbnail = video.snippet.thumbnails.default;
    // $scope.title = video.snippet.title;
    // $scope.description = video.snippet.description;
  });
