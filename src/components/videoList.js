angular.module('video-player')

  .component('videoList', {
    bindings: {
      videos: '<',
      video: '<',
      blah: '<',
    },
    templateUrl: 'src/templates/videoList.html',
    controller: 'videoListController'
  })
  .controller('videoListController', function() {

  });

