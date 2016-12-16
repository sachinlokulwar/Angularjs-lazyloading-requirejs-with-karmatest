'use strict';

/**
 * @ngdoc function
 * @name tqlApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tqlApp
 */

define(['scripts/app'], function (app) {

/*	var AboutCtrl = function () {
	    this.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
    };

	app.register.controller('AboutCtrl', AboutCtrl);
*/

  app.controller('AboutCtrl', ['$scope', function($scope)
    {
        $scope.page =
        {
            heading: 'About Us'
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
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/