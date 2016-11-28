angular
  .module('common', [
    'ui.router',
    'ngMaterial',
    'angular-loading-bar'
  ])
  .run(function ($transitions, cfpLoadingBar, $rootScope, $mdMedia) {
    $rootScope.$mdMedia = $mdMedia;

    $transitions.onStart({}, function(){
      console.log('starting now');
      return cfpLoadingBar.start();
    });
    $transitions.onSuccess({}, function(){
      return cfpLoadingBar.complete();
    });
  });
