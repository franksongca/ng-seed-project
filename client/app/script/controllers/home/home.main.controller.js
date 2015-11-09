/* jshint -W097 */
'use strict';

angular.module('ngSeedApp').controller('HomeMainCtrl', [
    '$rootScope',
    '$scope',
    '$controller',
    'Constants',
    'action',
    function ($rootScope, $scope, $controller, Constants, action) {
        $scope.action = action;
        $controller('HomeBaseCtrl', {$scope: $scope});
    }
]);
