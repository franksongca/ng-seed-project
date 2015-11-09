/* jshint -W097 */
'use strict';

angular.module('ngSeedApp').controller('FeaturesCtrl', [
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

            $scope.setFeatureStatus(1);

            $scope.featureKeys = Constants.DASHBOARD_MENU_KEYS;


            function getData() {
                TranslateFactory.translate({
                    keys: phraseKeys,
                    type: 'MESSAGES'
                }).then(function (data) {
                    $scope.appName = data['MESSAGES.APP_NAME'];
                });
            }

            $scope.launchFeature = function (key, value) {
                console.log(key, value);
                $state.go('home', {action: Constants.DASHBOARD_ACTIONS[key + 1]});
            };

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
