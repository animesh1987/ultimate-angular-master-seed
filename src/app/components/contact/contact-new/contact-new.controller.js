function ContactNewController(ContactService, ToastService){
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
        console.log(contact);
        ToastService.showSuccessToast('Contact Created!', 'check_circle', 'top right', 3000);
      })
  }
}

angular.module('components.contact')
  .controller('ContactNewController', ContactNewController)
