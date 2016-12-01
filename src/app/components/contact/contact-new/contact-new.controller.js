function ContactNewController(ContactService, ToastService, $state){
  var ctrl = this;

  ctrl.$onInit = function () {
    ctrl.contact = {
      name: '',
      email: '',
      job: '',
      location: '',
      social: {
        facebook: '',
        github: '',
        twitter: '',
        linkedin: ''
      },
      tags: 'none'
    };
  };

  ctrl.createNewContact = function (event) {
    return ContactService
      .createNewContact(event.contact)
      .then(function (contact) {
        ToastService.showSuccessToast('Contact Created!', 'check_circle', 'top right', 3000);
        $state.go('contact', {id: contact.key});
      })
  }
}

angular.module('components.contact')
  .controller('ContactNewController', ContactNewController)
