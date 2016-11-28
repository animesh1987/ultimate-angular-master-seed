function ToastService($mdToast){

  var toast = $mdToast;

  this.showSuccessToast = function(message, icon, position, delay, parent) {
    var template = "<md-toast><md-icon md-theme='main' class='md-accent'> " + icon + " </md-icon>" + "<span class='margin-left-10'>" + message + "</span></md-toast>";

    $mdToast.show({
      hideDelay: delay,
      position: position,
      template: template
    });
  };

  this.errorSuccessToast = function(message, icon, position, delay, parent) {
    var template = "<md-toast><md-icon md-theme='main' class='md-warn'> " + icon + " </md-icon>" + "<span class='margin-left-10'>" + message + "</span></md-toast>";

    $mdToast.show({
      hideDelay: delay,
      position: position,
      template: template
    });
  };


};

angular.module('common')
  .service('ToastService', ToastService);
