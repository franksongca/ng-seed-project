/* jshint -W097 */
'use strict';

angular.module('ngSeedApp').controller('Feature3Ctrl', [
        '$rootScope',
        '$scope',
        '$timeout',
        '$modal',
        '$state',
        'Constants',
        'TranslateFactory',
        'AppManagerFactory',
        function (
            $rootScope,
            $scope,
            $timeout,
            $modal,
            $state,
            Constants,
            TranslateFactory,
            AppManagerFactory) {

            // define the phrases used in this view
            var phraseKeys = [
                'APP_NAME',
                'FEATURE1_DESCRIPTION'
            ];

            $scope.setFeatureStatus(-1);

            function getData() {
                TranslateFactory.translate({
                    keys: phraseKeys,
                    type: 'MESSAGES'
                }).then(function (data) {
                    $scope.appName = data['MESSAGES.APP_NAME'];
                });
            }

            $scope.$on(Constants.EVENTS.LANGUAGE_CHANGED, function (event, code) {
                TranslateFactory.setLanguage(code);
                getData();
            });

            $scope.$on('$viewContentLoaded', function () {
                var loginStatus = AppManagerFactory.getLoginStatus();
                if (loginStatus) {
                    getData();
                } else {
                    $state.go('home');
                }
            });
        }]
);
