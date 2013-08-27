'use strict';

/* Controllers */
function ctrl1($scope) {
    $scope.myObject = {
    value: 0,
    increment: function(inc) {
        this.value += typeof inc === 'number' ? inc : 1;
        }
    }
    $scope.myObject.increment(5);
}

/*
angular.module('myApp.controllers', []).
    controller('MyCtrl1', [function($scope) {
        $scope.myObject = {
            value: 0,
            increment: function(inc) {
                this.value += typeof inc === 'number' ? inc : 1;
            }
        }

        $scope.myObject.increment();

        $scope.name = 'JJ';
    }])
    .controller('MyCtrl2', [function() {

    }]);
*/