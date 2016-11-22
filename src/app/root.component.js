var root = {
  templateUrl: './root.html'
};

angular
  .module('root')
  .component('root', root)
  .config(function($mdThemingProvider){
    $mdThemingProvider
      .theme('main')
      .primaryPalette('blue', {'default': '500'})
      .accentPalette('teal')
      .warnPalette('red')
      .backgroundPalette('grey');
  });
