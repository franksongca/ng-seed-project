/* jshint -W097 */
'use strict';

angular.module('ngSeedApp').controller('HeaderCtrl', [
    '$rootScope',
    '$scope',
    '$timeout',
    '$state',
    '_',
    'Constants',
    'MainMenuDataFactory',
    'LangMenuDataFactory',
    'TranslateFactory',
    'action',
    function ($rootScope, $scope, $timeout, $state, _, Constants, MainMenuDataFactory, LangMenuDataFactory, TranslateFactory, action) {
        function getData() {
            MainMenuDataFactory.getMenuData().then(
                function (data) {
                    $scope.headerMenuItems = [];
                    _.forEach(Constants.MAIN_MENU_KEYS, function (key, value) {
                        $scope.headerMenuItems.push(data['MESSAGES.' + key]);
                    });
                }
            );

            LangMenuDataFactory.getMenuData().then(
                function (data) {
                    $scope.langs = data;
                    $scope.currentLangName = (_.find($scope.langs, function (lang) {
                        return lang.code === $scope.currentLang;
                    })).name;
                }
            );
        }

        $scope.$on('$viewContentLoaded', function () {
            $scope.currentLang = TranslateFactory.getLanguage();
            getData();
        });

        $scope.$on(Constants.EVENTS.HEADER_ACTION_UPDATED, function (event, action) {
            $scope.action = action;

            $scope.actionIndex = MainMenuDataFactory.getActionIndex(action);
        });

        $scope.$on(Constants.EVENTS.LANGUAGE_CHANGED, function (event, code) {
            $scope.currentLang = code;
            TranslateFactory.setLanguage(code);
            getData();
        });

        $scope.onLangItemClicked = function(code) {
            $rootScope.$broadcast(Constants.EVENTS.LANGUAGE_CHANGED, code);
        };

        $scope.onActionItemClicked = function (index) {
            switch (index) {
                case 0:
                    $state.go('home', {action: ''});
                    break;
                case Constants.ACTIONS.length:
                    //$scope.spinnerOn();
                    $state.go('home', {action: 'features'});
                    break;
                default:
                    $state.go('home', {action: Constants.ACTIONS[index]});
                    break;
            }
        };
    }
]);
