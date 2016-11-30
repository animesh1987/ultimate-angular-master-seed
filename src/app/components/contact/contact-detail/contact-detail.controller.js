function ContactDetailController(ContactService, ToastService){
  var ctrl = this;

  ctrl.$onChanges = function (changes) {

  };

  ctrl.$onInit = function () {
    ctrl.isNewContact = !ctrl.contact.$id;
  };

  ctrl.saveContact = function () {
    ctrl.onSave({
      $event: {
        contact: $ctrl.contact
      }
    });
  }
}

angular.module('components.contact')
  .controller('ContactDetailController', ContactDetailController)
