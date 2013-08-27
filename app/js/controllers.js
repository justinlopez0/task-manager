'use strict';

angular.module('taskManager.controllers', []).
    controller('ctrl1', ['$scope', function($scope) {
        $scope.myObject = {
            value: 0,
            increment: function(inc) {
                this.value += typeof inc === 'number' ? inc : 1;
            }
        }
        $scope.myObject.increment(5);
    }])
    .controller('MyCtrl2', [function() {

    }]);
