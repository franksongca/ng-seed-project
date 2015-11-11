/* jshint -W097 */
'use strict';

angular.module('ngSeedApp').controller('HomeBaseCtrl', [
    '$rootScope',
    '$scope',
    '$state',
    'TranslateFactory',
    'Constants',
    function ($rootScope, $scope, $state, TranslateFactory, Constants) {
        $scope.$on('$viewContentLoaded', function () {
            if ($scope.loginStatus) {
                $scope.goHome({goHome: false});
            } else {
                getData();
            }
        });

        function getData() {
            if ($scope.phraseKeys) {
                TranslateFactory.translate({
                    keys: $scope.phraseKeys,
                    type: 'MESSAGES'
                }).then(function (data) {
                    $scope.phrases = data;
                    $rootScope.$broadcast(Constants.EVENTS.HEADER_ACTION_UPDATED, $scope.action);
                });
            } else {
                $rootScope.$broadcast(Constants.EVENTS.HEADER_ACTION_UPDATED, $scope.action);
            }

            //if ($scope.errMsgKeys) {
            //    TranslateFactory.translate({
            //        keys: $scope.errMsgKeys,
            //        type: 'MESSAGES'
            //    }).then(function (data) {
            //        $scope.errors = data;
            //    });
            //}
        }

        $scope.$on(Constants.EVENTS.LANGUAGE_CHANGED, function (event, code) {
            getData();
        });

        $scope.goHome = function (option) {
            $rootScope.$broadcast(Constants.EVENTS.LOGGED_OUT, option);
        };
    }
]);
