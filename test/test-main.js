var tests = [];
for (var file in window.__karma__.files)
{
	if (window.__karma__.files.hasOwnProperty(file))
	{
		if (file.substring(file.length - 14, file.length) === 'contactSpec.js' || file.substring(file.length - 12, file.length) === 'aboutSpec.js' || file.substring(file.length - 11, file.length) === 'mainSpec.js') {
                console.log('Added file to testing..'+ file);
                tests.push(file);
        }
	}
}

requirejs.config
({
	// Karma serves files from '/base'
	baseUrl: '/base/app',

	paths:{
            'angular': '/base/bower_components/angular/angular',
            'angularResource': '/base/bower_components/angular-resource/angular-resource',
            'angularMocks': '/base/bower_components/angular-mocks/angular-mocks',
            'appModule': '/base/test/spec/lazyMock',
            'angular-route':'/base/bower_components/angular-route/angular-route'
        },
        shim:{
            'angular' :{
                exports:'angular'
            },
            'appModule': {
            	deps:['angular','angular-route'],
                exports: 'appModule'
            },
            'angularResource': {
                deps: ['angular'],
                exports: 'angularResource'
            },
            'angularMocks': {
                deps: ['angularResource'],
                exports: 'angularMocks'
            }
           
        },

	
    // ask Require.js to load these files (all our tests)
    deps: tests,
    // start test run, once Require.js is done
    callback: window.__karma__.start



	/*// ask Require.js to load these files (all our tests)
	deps: tests,

	// start test run, once Require.js is done
	callback: window.__karma__.start*/
});