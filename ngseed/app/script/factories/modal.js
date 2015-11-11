/* jshint -W097 */
'use strict';

angular.module('ngSeedApp').factory('SimpleModal',
    ['$q', '$modal', 'TranslateFactory', 'Constants', function ($q, $uibModal, TranslateFactory, Constants) {

        return {
            open: function (option) {
                var unbindWatcher,
                    controller = option.controller || function ($scope, $modalInstance) {
                        $scope.titleKey = option.titleKey;
                        $scope.messageKey = option.messageKey;
                        $scope.buttons = option.buttons;
                        $scope.imageSrc = option.imageSrc;
                        $scope.close = function () {
                            console.log('CLOSE!!!!!!!!!!!!!!!!![modal returns NO]');
                            $modalInstance.dismiss('cancel');
                        };

                        $scope.confirm = function () {
                            console.log('CONFIRM!!!!!!!!!!!!!!!!![modal returns YES]');
                            $modalInstance.close();
                        };

                        $scope.onClick = function (action) {
                            switch (action) {
                                case 'CANCEL':
                                    $scope.close();
                                    break;

                                default:
                                    $scope.confirm({action: action});
                                    break;
                            }
                        };

                        //$modalInstance.opened.then(function () {
                        //    unbindWatcher = $scope.$watch(
                        //        function () {
                        //            return angular.element('.bottom-panel').length;
                        //        },
                        //        function (newValue) {
                        //            if (newValue) {
                        //                unbindWatcher();
                        //                angular.element('.bottom-panel').parent().addClass('force-to-panel');
                        //            }
                        //        }
                        //    );
                        //});
                    },
                    deferred = $q.defer(),
                    modalInstance;

                modalInstance = $uibModal.open({
                    animation: option.animationEnabled,
                    templateUrl: option.templateUrl || '/ngseed/templates/default.modal.html',
                    controller: controller,
                    size: option.size || 'sm',
                    resolve: {
                        type: option.type
                    }
                });

                modalInstance.result.then(
                    function (response) {
                        console.log('modal returns YES');
                        deferred.resolve(response);
                    },
                    function (response) {
                        console.log('modal returns NO');
                        deferred.reject(response);
                    }
                );

                return deferred.promise;
            }
        };
    }]
);
