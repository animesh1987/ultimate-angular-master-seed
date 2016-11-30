function registerController(AuthService, $state, ToastService){

  var ctrl = this;

  ctrl.$onInit = function(){
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: ''
    };
  };

  ctrl.createUser = function (event) {
    return AuthService
      .register(event.user)
      .then(function(user){
        ToastService.showSuccessToast('Successfully Registered!', 'check_circle', 'top right', 3000);
        $state.go('app');
      }, function(err){
        ToastService.errorSuccessToast(err.message, 'warning', 'top right', 3000);
      });
  };
}

angular.module('components.auth')
  .controller('RegisterController', registerController)
