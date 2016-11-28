function loginController(AuthService, $state){

  var ctrl = this;
  ctrl.$onInit = function(){
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: ''
    };
  };

  ctrl.loginUser = function (event) {
    return AuthService
      .login(event.user)
      .then(function(user){
        $state.go('app');
        // redirect to a future state
      }, function(err){
        ctrl.error = err.message;
      });
  };
}

angular.module('components.auth')
  .controller('LoginController', loginController)
