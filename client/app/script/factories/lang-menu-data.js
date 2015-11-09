/* jshint -W097 */
'use strict';

angular.module('ngSeedApp').factory('LangMenuDataFactory',
    ['$q', 'TranslateFactory', 'Constants', '_', function ($q, TranslateFactory, Constants, _) {
        return {
            getMenuData: function (lang) {
                var deferred = $q.defer(), langs, type = 'MESSAGES';

                TranslateFactory.translate({
                    keys: _.pluck(Constants.LANGUAGES, 'key'),
                    lang: lang,
                    type: type
                }).then(
                    function (data) {
                        langs = [];

                        _.forEach(Constants.LANGUAGES, function (langInfo, n) {
                            langs[n] = {
                                key: langInfo.key,
                                name: data[type + '.' + langInfo.key],
                                code: langInfo.code
                            };
                        });

                        deferred.resolve(langs);
                    }
                );

                return deferred.promise;
            }
        };
    }]
);