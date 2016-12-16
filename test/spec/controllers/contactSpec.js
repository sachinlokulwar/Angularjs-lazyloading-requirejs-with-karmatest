'use strict';

module('tqlApp', function(app)
{
	console.log(app)
});

define(['scripts/controllers/contact'], function(app)
{
	describe("The 'Contact'", function()
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

			$controller('ContactCtrl', {$scope:$scope});
		});

		it("test", function()
		{
			expect(true).toBe(true);
			//expect($scope.page.heading).toBe('About Us');
		});
		it("should set the page heading to 'Contact Us'", function()
		{
			//expect(true).toBe(true);
			expect($scope.page.heading).toBe('Contact Us');
		});
	});
});