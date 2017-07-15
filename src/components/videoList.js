angular.module('video-player')

  .component('videoList', {
    bindings: {
      videos: '<',
      video: '<',
      onClick: '<',
    },
    templateUrl: 'src/templates/videoList.html',
    controller: 'videoListController'
  })
  .controller('videoListController', function() {

  });

