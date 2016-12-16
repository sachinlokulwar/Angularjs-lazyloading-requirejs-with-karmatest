'use strict';

require.config({
    baseUrl: '',
    });

require(
    [
        'scripts/routeResolver',
        'scripts/app'
        

    ],
    function () {
        angular.bootstrap(document, ['tqlApp']);
    });
