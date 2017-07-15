angular.module('video-player')

  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<'
    },
    templateUrl: 'src/templates/videoList.html',
    controller: 'videoListController'
  })
  .controller('videoListController', function() {

  });

