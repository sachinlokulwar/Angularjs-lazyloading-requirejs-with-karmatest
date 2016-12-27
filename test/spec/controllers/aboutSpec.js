'use strict';

module('tqlApp', function(app)
{
	console.log(app)
});
/*
define(['scripts/controllers/about'], function(app)
{
	describe("The 'About'", function()
	{
		var $rootScope;
		var $controller;
		var $scope;
		beforeEach(function()
		{
			module('tqlApp');
			inject
			([
				'$injector',
				'$rootScope',
				'$controller',

				function($injector, _$rootScope, _$controller)
				{
					$rootScope = _$rootScope;
					$scope = $rootScope.$new();
					$controller = _$controller;
				}
			]);

			$controller('AboutCtrl', {$scope:$scope});
		});

		it("test", function()
		{
			expect(true).toBe(true);
			//expect($scope.page.heading).toBe('About Us');
		});
		it("should set the page heading to 'About Us'", function()
		{
			//expect(true).toBe(true);
			expect($scope.page.heading).toBe('About Us');
		});
	});
});*/


define(['angular','scripts/controllers/about','angularMocks'], function(angular,AboutCtrl)
{
	describe("The 'About'", function()
	{

		beforeEach(angular.mock.module(function($controllerProvider) {
	        $controllerProvider.register('AboutCtrl', AboutCtrl);
	    }));

		it("test", function()
		{
			expect(true).toBe(true);
			
		});
		it("should set the page heading to 'About Us'", function($controller)
		{
			expect($controller('AboutCtrl')($scope.page.heading)).toBe('About Us');
		});
	});
});
