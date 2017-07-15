angular.module('video-player')

  .component('videoListEntry', {
    bindings: {
      video: '<',
      setvideo: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html',
    controller: 'videoListEntryController'
  })
  .controller('videoListEntryController', function() {

  });
