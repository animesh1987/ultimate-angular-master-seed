angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function ($firebaseRefProvider) {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBhKcrdxqnJmE_iEZhbKgNf0CwAVoxjelk",
      authDomain: "mymanager-d26dc.firebaseapp.com",
      databaseURL: "https://mymanager-d26dc.firebaseio.com",
      storageBucket: "mymanager-d26dc.appspot.com"
    };

    $firebaseRefProvider.registerUrl({
      default: config.databaseURL,
      contacts: config.databaseURL + '/contacts'
    });
    firebase.initializeApp(config);
  });
