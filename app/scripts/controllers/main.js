'use strict';

/**
 * @ngdoc function
 * @name tqlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tqlApp
 */

 define(['scripts/app'], function (app) {

	/*var MainCtrl = function () {
	    this.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
	};

	app.register.controller('MainCtrl', MainCtrl);*/

	app.controller('MainCtrl', ['$scope', function($scope)
    {
        $scope.page =
        {
            heading: 'Home Page'
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
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });*/
