var contacts = {
  bindings: {
    contacts: '<'
  },
  templateUrl: './contacts.html',
  controller: 'ContactsController'

};

angular
  .module('components.contact')
  .component('contacts', contacts)
  .config(function ($stateProvider) {
    $stateProvider
      .state('contacts', {
        parent: 'app',
        url: '/contacts',
        data: {
          requiredAuth: true
        },
        component: 'contacts',
        resolve: {
          contacts: function (ContactService) {
            return ContactService.getContactList().$loaded();
          }
        }
      });
  })
