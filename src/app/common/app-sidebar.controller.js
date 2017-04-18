function AppSidebarController($rootScope){

  console.log($rootScope);

  var ctrl = this;

  ctrl.contactTags = [{
    label: 'All Contacts',
    icon: 'star',
    state: 'none'
  },{
    label: 'Friends',
    icon: 'people',
    state: 'friends'
  },{
    label: 'Family',
    icon: 'child_care',
    state: 'family'
  },{
    label: 'Acquantainces',
    icon: 'accessibility',
    state: 'acquaintances'
  },{
    label: 'Following',
    icon: 'remove_red_eye',
    state: 'following'
  }];

  ctrl.todoTags = [
    {
      label: `TO-DO's`,
      icon: 'remove_red_eye',
      state: 'todos'
    }
  ];


};

angular.module('common')
  .controller('AppSidebarController', AppSidebarController);
