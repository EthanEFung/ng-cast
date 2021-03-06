angular.module('video-player')

  // .service('AppService', function($http) {
  //   $http.videos = window.exampleVideoData;
  // })

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: 'appController'
  })

  .controller('appController', function() {
    let $ctrl = this;
    $ctrl.videos = window.exampleVideoData;
    $ctrl.video = window.exampleVideoData[0];
    $ctrl.currentVideo = window.exampleVideoData[0];
    $ctrl.setVideo = (video) => {
      $ctrl.video = video;
    };

    $ctrl.searchResults = function() {};
  });