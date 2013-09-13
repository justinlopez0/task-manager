'use strict';

var taskManager = angular.module('taskManager.controllers', []);

taskManager.controller('TaskList', ['$scope', function($scope) {
    $scope.tasks = [
        {
            name: "Task One",
            description: "This is task one"
        }
    ];
}]);