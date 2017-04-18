var todos = {
  bindings: {
    todos: '<'
  },
  templateUrl: './todos.html',
  controller: 'ToDosController'
};

angular.module('components.todos')
  .component('todos', todos)
  .config(function ($stateProvider) {
    $stateProvider
      .state('todos', {
        parent: 'app',
        url: '/todos',
        data: {
          requiredAuth: true
        },
        component: 'todos'
      }
    )
  })
