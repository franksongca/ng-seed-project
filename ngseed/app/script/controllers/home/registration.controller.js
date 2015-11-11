/* jshint -W097 */
'use strict';

angular.module('ngSeedApp').controller('RegistrationCtrl', [
    '$rootScope',
    '$scope',
    '$controller',
    'Constants',
    'action',
    function ($rootScope, $scope, $controller, Constants, action) {
        $scope.action = action;
        $scope.phraseKeys = [
            'NAME_PLACEHOLDER',
            'EMAIL_PLACEHOLDER',
            'PASSWORD_PLACEHOLDER',
            'PASSWORD_CONFIRM_PLACEHOLDER'
        ];
        $scope.errMsgKeys = [
            'NAME_PLACEHOLDER',
            'EMAIL_PLACEHOLDER',
            'PASSWORD_PLACEHOLDER',
            'PASSWORD_CONFIRM_PLACEHOLDER'
        ];
        $scope.phrases = [];
        $scope.errors = [];
        $controller('HomeBaseCtrl', {$scope: $scope});

        $scope.register = function () {

        };

        $scope.onChanged = function () {

        };
    }
]);
