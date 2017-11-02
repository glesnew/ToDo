var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope){
    $scope.todoList=[{task: 'Clean House'},{task: 'Feed Dog'}, {task:'Nap'}];
    $scope.todoAdd=function(){
        $scope.todoList.push({task:$scope.todoInput});
    };
});
