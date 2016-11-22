function AuthService($firebaseAuth){

  var auth = $firebaseAuth();
  var authData = null;

  function StoreAuthData(response){
    authData = response;
    return authData;
  };

  this.register = function(user){
    return auth
      .$createUserWithEmailAndPassword(user.email, user.password)
      .then(StoreAuthData);
  };

  this.login = function (user) {
    return auth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(StoreAuthData);
  }
};

angular
  .module('components.auth')
  .service('AuthService', AuthService)
