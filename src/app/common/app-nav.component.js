var appNav = {
  bindings: {
    user: '<',
    state: '<',
    onLogout: '&'
  },
  templateUrl: './app-nav.html',
  controller: function () {
    console.log('nav ctrl', this);
  }
}


angular
  .module('common')
  .component('appNav', appNav)
