'use strict';

describe('sample test', function () {
    beforeEach(module('ngSeedApp'));

    describe('#Test TestService', function () {
        it('TestService.isFalse() should return false!', inject(function (TestService) {
            expect(TestService.isFalse()).toBe(false);
        }));
    });
});
