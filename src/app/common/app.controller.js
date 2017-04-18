function AppController(AuthService, $state){
  var ctrl = this;

  console.log(ctrl.state);

  ctrl.user = AuthService.getUser();

  ctrl.state = $state;

  ctrl.logout = function () {
    AuthService.logout().then(function () {
      $state.go('auth.login');
    });
  };
}


angular.module('common')
  .controller('AppController', AppController);
