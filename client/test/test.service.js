angular.module('ngSeedApp').service('TestService',
    function () {
        this.isFalse = function () {
            return false;
        };

        return this;
    }
);