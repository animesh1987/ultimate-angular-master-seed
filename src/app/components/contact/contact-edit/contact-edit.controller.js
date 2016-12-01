function ContactEditController(ContactService, ToastService, cfpLoadingBar, DialogService, $state){
  var ctrl = this;

  ctrl.updateContact = function (event) {
    cfpLoadingBar.start();
    return ContactService
      .updateContact(event.contact)
      .then(function () {
        cfpLoadingBar.complete();
        ToastService.showSuccessToast('Contact Updated!', 'check_circle', 'top right', 3000);
      }, function (err) {
        cfpLoadingBar.complete();
        ToastService.errorSuccessToast(err.message, 'warning', 'top right', 3000);
      });
  };

  ctrl.deleteContact = function (event) {
    console.log('cccccc');
    var message = 'Delete ' + event.contact.name + ' from contacts!';
    /*var mouseEvent = document.createEvent('MouseEvent');*/

    var handler = function(){
      return ContactService
        .deleteContact(event.contact)
        .then(function () {
          $state.go('contacts')
          ToastService.errorSuccessToast('Contact Deleted!', 'delete', 'top right', 3000);
        }, function (err) {
          cfpLoadingBar.complete();
          ToastService.errorSuccessToast(err.message, 'warning', 'top right', 3000);
        });
    };

    DialogService.showConfirmDialog(event.clickEvent, 'Confirm', message, 'Ok', 'Cancel', handler)
  };

}

angular
  .module('components.contact')
  .controller('ContactEditController', ContactEditController)
