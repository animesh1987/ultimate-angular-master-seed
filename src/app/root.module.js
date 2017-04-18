angular
  .module('root', [
    'common',
    'components',
    'templates'
  ])
  .config(function($mdThemingProvider){
    $mdThemingProvider
      .theme('main')
      .primaryPalette('blue', {'default': '500'})
      .accentPalette('teal')
      .warnPalette('red')
      .backgroundPalette('grey');
  });
