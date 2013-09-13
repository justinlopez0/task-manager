'use strict';

/* Directives */
var taskManager = angular.module('taskManager.directives', []);

taskManager.directive('taskList', ['version', function(version) {
    return {
        controller: function($scope) {
            console.log($scope.tasks);
        },
        link: function($scope, elm, attrs) {

        },
        scope: true,
        templateUrl: 'partials/tasklist.html',
        transclude: true,
        restrict: 'E'
    }
}]);
