function AppSidebarController($rootScope){

  console.log($rootScope);

  var ctrl = this;

  ctrl.contactTags = [{
    label: 'All Contacts',
    icon: 'star'
  },{
    label: 'Friends',
    icon: 'people'
  },{
    label: 'Family',
    icon: 'child_care'
  },{
    label: 'Acquantainces',
    icon: 'accessibility'
  },{
    label: 'Following',
    icon: 'remove_red_eye'
  }];


};

angular.module('common')
  .controller('AppSidebarController', AppSidebarController);
