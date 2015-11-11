/* jshint -W097 */
'use strict';

angular.module('ngSeedApp').factory('AppManagerFactory',
    ['$q', 'Constants', function ($q, Constants) {

        return {
            getLoginStatus: function () {
                return sessionStorage.LoginStatus ? true : false;
            },

            setLoginStatus: function (status) {
                if (status) {
                    sessionStorage.LoginStatus = '1';
                } else {
                    sessionStorage.removeItem('LoginStatus');
                }
            },

            getFeatureStatus: function () {
                return sessionStorage.FeaturesStatus || '';
            },

            setFeatureStatus: function (status) {
                if (status) {
                    sessionStorage.FeatureStatus = status;
                } else {
                    sessionStorage.removeItem('FeaturesStatus');
                }
            }
        };
    }]
);
