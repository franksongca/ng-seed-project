/* jshint -W097 */
'use strict';

angular.module('ngSeedApp').controller('ResetPasswordCtrl', [
    '$rootScope',
    '$scope',
    '$controller',
    'Constants',
    'AppManagerFactory',
    'action',
    function ($rootScope, $scope, $controller, Constants, AppManagerFactory, action) {
        $scope.action = action;
        $scope.phraseKeys = [
            'PASSWORD_PLACEHOLDER',
            'OLD_PASSWORD_PLACEHOLDER',
            'CONFIRM_PASSWORD_PLACEHOLDER'
        ];
        $scope.phrases = [];
        $controller('HomeBaseCtrl', {$scope: $scope});

        $scope.setFeatureStatus(2);

        $scope.user = {
            email: ''
        };

        $scope.login = function () {

        };

        $scope.onChanged = function () {

        };
    }
]);
