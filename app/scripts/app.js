'use strict';



define(['scripts/routeResolver'], function () {

    var app = angular.module('tqlApp', ['ngRoute', 'routeResolverServices']);

    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider','$compileProvider', '$filterProvider', '$provide',
        function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
            //Change default views and controllers directory using the following:
            //routeResolverProvider.routeConfig.setBaseDirectories('/app/views', '/app/controllers');
            app.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            //Define routes - controllers will be loaded dynamically
            var route = routeResolverProvider.route;

            $routeProvider
                .when('/', route.resolve({
                    controller:'',
                    templateUrl:'views/main.html',
                    dependencies:['scripts/controllers/main.js']
                }))
                .when('/about', route.resolve({
                    controller:'',
                    templateUrl:'views/about.html',
                    dependencies:['scripts/controllers/about.js']
                    
                }))
                .when('/contact',route.resolve({
                    controller:'',
                    templateUrl:'views/contact.html',
                    dependencies:['scripts/controllers/contact.js']
                    
                }))
                
                .otherwise({ redirectTo: '/'});
        }]);

    return app;

});
