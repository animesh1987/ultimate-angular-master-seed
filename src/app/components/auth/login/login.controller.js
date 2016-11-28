function loginController(AuthService, $state, ToastService, $timeout){

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
        ToastService.showSuccessToast('Successfully logged in!', 'check_circle', 'top right', 3000);
        // redirect to a future state
      }, function(err){
        ToastService.errorSuccessToast(err.message, 'warning', 'top right', 3000);
        //ctrl.error = err.message;
      });
  };
}

angular.module('components.auth')
  .controller('LoginController', loginController)
