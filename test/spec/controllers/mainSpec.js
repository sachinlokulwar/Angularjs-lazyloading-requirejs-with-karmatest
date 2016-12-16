'use strict';

module('tqlApp', function(app)
{
	console.log(app)
});

define(['scripts/controllers/main'], function(app)
{
	describe("The 'Main'", function()
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

			$controller('MainCtrl', {$scope:$scope});
		});

		it("test", function()
		{
			expect(true).toBe(true);
			//expect($scope.page.heading).toBe('About Us');
		});
		it("should set the page heading to 'Home Page'", function()
		{
			//expect(true).toBe(true);
			expect($scope.page.heading).toBe('Home Page');
		});
	});
});