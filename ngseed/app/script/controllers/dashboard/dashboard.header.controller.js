/* jshint -W097 */
'use strict';

angular.module('ngSeedApp').controller('DashboardHeaderCtrl', [
    '$rootScope',
    '$scope',
    '$timeout',
    '$state',
    '_',
    'SimpleModal',
    'Constants',
    'FeaturesHeaderMenuDataFactory',
    'LangMenuDataFactory',
    'TranslateFactory',
    'action',
    function (
        $rootScope,
        $scope,
        $timeout,
        $state,
        _,
        SimpleModal,
        Constants,
        FeaturesHeaderMenuDataFactory,
        LangMenuDataFactory,
        TranslateFactory,
        action) {
        function getData() {
            //console.log('action='+action)
            FeaturesHeaderMenuDataFactory.getMenuData().then(
                function (data) {
                    $scope.headerMenuItems = [];
                    _.forEach(Constants.FEATURES_HEADER_MENU_KEYS, function (key, value) {
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
                    SimpleModal.open({
                            size: 'sm',
                            animationEnabled: true,
                            titleKey: 'LOGOUT',
                            messageKey: 'LOGOUT_CONFIRM',
                            imageSrc: 'ngseed/assets/images/logout.png',
                            buttons: [{key: 'OK', action: 'OK'}, {key: 'CANCEL', action: 'CANCEL'}]
                    }).then(
                        function (evt) {
                            $state.go('home', {action: ''});    // logout
                        }
                    );
                    break;
                case 1:
                    $state.go('home', {action: Constants.FEATURES_HEADER_ACTIONS[1]});
                    break;
                case 2:
                    $state.go('home', {action: Constants.FEATURES_HEADER_ACTIONS[2]});
                    break;
            }
        };
    }
]);
