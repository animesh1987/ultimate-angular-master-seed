function DialogService($mdDialog){

  var dialog = $mdDialog;

  return {
    showSimpleDialog: function(message, $event, title, confirmMessage) {
      return dialog.show(dialog.alert().parent(angular.element(document.querySelector('body'))).clickOutsideToClose(true).title(title).textContent(message).ariaLabel('Alert Dialog Demo').ok(confirmMessage).targetEvent($event));
    },
    showConfirmDialog: function($event, title, message, confirmMessage, cancelMessage, handler) {
      var confirmDialog;
      confirmDialog = dialog.confirm().title(title).textContent(message).targetEvent($event).ok(confirmMessage).cancel(cancelMessage);
      return dialog.show(confirmDialog).then(function() {
        return handler();
      }, function() {
        return console.log('NO');
      });
    }
  }

};

angular.module('common')
  .factory('DialogService', DialogService);
