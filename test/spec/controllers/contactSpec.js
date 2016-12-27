'use strict';

module('tqlApp', function(app)
{
	console.log(app)
});

define(['angular','scripts/controllers/contact','angularMocks'], function(angular,ContactCtrl)
{
	describe("The 'Contact'", function()
	{

		beforeEach(angular.mock.module(function($controllerProvider) {
	        $controllerProvider.register('ContactCtrl', ContactCtrl);
	    }));

		it("test", function()
		{
			expect(true).toBe(true);
			
		});
		it("should set the page heading to 'Contact Us'", function($controller)
		{
			expect($controller('ContactCtrl')($scope.page.heading)).toBe('Contact Us');
		});
	});
});

