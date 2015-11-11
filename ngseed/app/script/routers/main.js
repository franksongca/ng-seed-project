/* jshint -W097 */
'use strict';

angular.module('ngSeedApp')
    .config(['$stateProvider', 'Constants', function ($stateProvider, Constants) {
        $stateProvider
            .state('home', {
                url: '/:action',
                cache: false,
                resolve:{
                    action: ['$stateParams', function($stateParams){
                        return $stateParams.action;
                    }]
                },
                params: {action: ''},
                views: {
                    '': {
                        templateUrl: '/ngseed/templates/menu.html'
                    },
                    'header@home': {
                        templateUrl: function ($stateParams) {
                            var url;
                            switch ($stateParams.action) {
                                case Constants.DASHBOARD_ACTIONS[0]:
                                case Constants.DASHBOARD_ACTIONS[1]:
                                case Constants.DASHBOARD_ACTIONS[2]:
                                case Constants.DASHBOARD_ACTIONS[3]:
                                case Constants.FEATURES_HEADER_ACTIONS[1]:
                                case Constants.FEATURES_HEADER_ACTIONS[2]:
                                    url = '/ngseed/templates/dashboard/dashboard.header.html';
                                    break;
                                default:
                                    url = '/ngseed/templates/header.html';
                                    break;
                            }

                            return url;
                        },

                        controllerProvider: function($stateParams) {
                            var ctrlName;
                            switch ($stateParams.action) {
                                case Constants.DASHBOARD_ACTIONS[0]:
                                case Constants.DASHBOARD_ACTIONS[1]:
                                case Constants.DASHBOARD_ACTIONS[2]:
                                case Constants.DASHBOARD_ACTIONS[3]:
                                case Constants.FEATURES_HEADER_ACTIONS[1]:
                                case Constants.FEATURES_HEADER_ACTIONS[2]:
                                    ctrlName = 'DashboardHeaderCtrl';
                                    break;
                                default:
                                    ctrlName = 'HeaderCtrl';
                                    break;
                            }

                            return ctrlName;
                        }
                    },
                    'content@home': {
                        templateUrl: function ($stateParams) {
                            var url;
                            switch ($stateParams.action) {
                                case Constants.ACTIONS[1]:
                                    url = '/ngseed/templates/login.html';
                                    break;
                                case Constants.ACTIONS[2]:
                                    url = '/ngseed/templates/forgot.password.html';
                                    break;
                                case Constants.ACTIONS[3]:
                                    url = '/ngseed/templates/registration.html';
                                    break;
                                case Constants.DASHBOARD_ACTIONS[0]:
                                    url = '/ngseed/templates/dashboard/features.html';
                                    break;
                                case Constants.DASHBOARD_ACTIONS[1]:
                                    url = '/ngseed/templates/dashboard/feature1.html';
                                    break;
                                case Constants.DASHBOARD_ACTIONS[2]:
                                    url = '/ngseed/templates/dashboard/feature2.html';
                                    break;
                                case Constants.DASHBOARD_ACTIONS[3]:
                                    url = '/ngseed/templates/dashboard/feature3.html';
                                    break;
                                case Constants.FEATURES_HEADER_ACTIONS[1]:
                                    url = '/ngseed/templates/dashboard/features.html';
                                    break;
                                case Constants.FEATURES_HEADER_ACTIONS[2]:
                                    url = '/ngseed/templates/dashboard/reset.password.html';
                                    break;
                                default:
                                    url = '/ngseed/templates/main.html';
                                    break;
                            }

                            return url;
                        },
                        controllerProvider: function($stateParams) {
                            var ctrlName;
                            switch ($stateParams.action) {
                                case Constants.ACTIONS[1]:
                                    ctrlName = 'LoginCtrl';
                                    break;
                                case Constants.ACTIONS[2]:
                                    ctrlName = 'ForgotPasswordCtrl';
                                    break;
                                case Constants.ACTIONS[3]:
                                    ctrlName = 'RegistrationCtrl';
                                    break;
                                case Constants.DASHBOARD_ACTIONS[0]:
                                    ctrlName = 'FeaturesCtrl';
                                    break;
                                case Constants.DASHBOARD_ACTIONS[1]:
                                    ctrlName = 'Feature1Ctrl';
                                    break;
                                case Constants.DASHBOARD_ACTIONS[2]:
                                    ctrlName = 'Feature2Ctrl';
                                    break;
                                case Constants.DASHBOARD_ACTIONS[3]:
                                    ctrlName = 'Feature3Ctrl';
                                    break;
                                case Constants.FEATURES_HEADER_ACTIONS[1]:
                                    ctrlName = 'FeaturesCtrl';
                                    break;
                                case Constants.FEATURES_HEADER_ACTIONS[2]:
                                    ctrlName = 'ResetPasswordCtrl';
                                    break;
                                default:
                                    ctrlName = 'HomeMainCtrl';
                                    break;
                            }

                            return ctrlName;
                        }
                    },
                    'footer@home': {
                        templateUrl: '/ngseed/templates/footer.html',
                        controller: 'FooterCtrl'
                    }
                }
            });
    }]);

