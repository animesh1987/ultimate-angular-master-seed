function registerController(AuthService){

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
        console.log('User:', user);
        // refirect to a future state
        //$ctrl.user = response;
      }, function(err){
        ctrl.error = err.message;
      });
  };
}

angular.module('components.auth')
  .controller('RegisterController', registerController)
