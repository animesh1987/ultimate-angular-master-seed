function ContactDetailController(){
  var ctrl = this;

  ctrl.$onInit = function () {
    console.log('bbbbb')
    ctrl.isNewContact = !ctrl.contact.$id;
  };

  ctrl.saveContact = function () {
    ctrl.onSave({
      $event: {
        contact: ctrl.contact
      }
    });
  };

  ctrl.updateContact = function () {
    ctrl.onUpdate({
      $event: {
        contact: ctrl.contact
      }
    });
  };

  ctrl.deleteContact = function (event) {
    ctrl.onDelete({
      $event: {
        contact: ctrl.contact,
        event: event
      }
    });
  };

}

angular.module('components.contact')
  .controller('ContactDetailController', ContactDetailController)
