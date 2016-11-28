function AuthService($firebaseAuth){

  var auth = $firebaseAuth();
  var authData = null;

  function StoreAuthData(response){
    authData = response;
    return authData;
  };

  function onSignIn(user){
    authData = user;
    return auth.$requireSignIn();
  };

  function clearAuthData() {
    authData = null;
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
  };

  this.requireAuthentication = function(){
    return auth
      .$waitForSignIn()
      .then(onSignIn);
  };

  this.isAuthenticated = function () {
    return !!authData; // null or user object
  };

  this.getUser = function () {
    if(authData){
      return authData;
    }
  };

  this.logout = function (user) {
    return auth
      .$signOut()
      .then(clearAuthData);
  };
};

angular
  .module('components.auth')
  .service('AuthService', AuthService)
