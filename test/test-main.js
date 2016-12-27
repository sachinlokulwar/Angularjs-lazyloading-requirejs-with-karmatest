(function (window, require) {
    'use strict';

var tests = [];
for (var file in window.__karma__.files)
{
	if (window.__karma__.files.hasOwnProperty(file))
	{
		if (file.substring(file.length - 14, file.length) === 'contactSpec.js' || file.substring(file.length - 12, file.length) === 'aboutSpec.js' || file.substring(file.length - 11, file.length) === 'mainSpec.js') {
                //|| file.substring(file.length - 12, file.length) === 'aboutSpec.js' || file.substring(file.length - 11, file.length) === 'mainSpec.js'
                console.log('Added file to testing..'+ file);
                tests.push(file);
        }
	}
}

require
({
	// Karma serves files from '/base'
	baseUrl: '/base/app',

	paths:{
            'angular': '/base/bower_components/angular/angular',
            'angularResource': '/base/bower_components/angular-resource/angular-resource',
            'angularMocks': '/base/bower_components/angular-mocks/angular-mocks',
            'appModule': '/base/test/spec/lazyMock',
            
            'angular-route':'/base/bower_components/angular-route/angular-route',
            'ContactCtrl':'/base/app/scripts/controllers/contact'
        },
        shim:{
            'angular' :{
                exports:'angular'
            },
            'appModule': {
            	
                exports: 'appModule'
            },
            'angularResource': {
                deps: ['angular'],
                exports: 'angularResource'
            },
            'angularMocks': {
                deps: ['angularResource'],
                exports: 'angularMocks'
            },
            'ContactCtrl':{
                deps:['appModule'],
                exports: 'ContactCtrl'
            }
           
        }
    }, tests, function () {
        window.__karma__.start();
    }, function (err) {
        var failedModules = err.requireModules;
        console.log("err", err);

        if (failedModules && failedModules[0]) {
            throw new Error("Module could not be loaded: " + failedModules);
        } else {
            throw new Error("unknown error:" + err);
        }
    });
}(window, require));
