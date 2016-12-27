'use strict';

/**
 * @ngdoc function
 * @name tqlApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tqlApp
 */

 define(['scripts/app'], function (app) {

	/*var ContactCtrl = function () {
	    this.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
	};

	app.register.controller('ContactCtrl', ContactCtrl);
*/
	app.register.controller('ContactCtrl', ['$scope', function($scope)
    {
        $scope.page =
        {
            heading: 'Contact Us'
        };
        this.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
    }]);
  return app;
});
/*angular.module('tqlApp')
  .controller('ContactCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });*/
