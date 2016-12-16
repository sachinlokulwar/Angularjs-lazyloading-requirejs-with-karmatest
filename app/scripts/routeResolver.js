'use strict';

define([], function () {

    var routeResolver = function () {

        this.$get = function () {
            return this;
        };

        this.route = function (routeConfig) {

            var resolve = function (routeObj) {
                
                var routeDef = {};
                
                routeDef.templateUrl = routeObj.templateUrl
                
                routeDef.controller = routeObj.controller
               
                routeDef.resolve = {
                    load: ['$q', '$rootScope', function ($q, $rootScope) {
                        //var dependencies = [routeConfig.getControllersDirectory() + path + baseFileName + '.js'];
                        return resolveDependencies($q, $rootScope, routeObj.dependencies);
                    }]
                };

                return routeDef;
            },

            resolveDependencies = function ($q, $rootScope, dependencies) {
                var defer = $q.defer();
                require(dependencies, function () {
                    defer.resolve();
                    $rootScope.$apply();
                });

                return defer.promise;
            };

            return {
                resolve: resolve
            };
        }(this.routeConfig);

    };

    var servicesApp = angular.module('routeResolverServices', []);

    //Must be a provider since it will be injected into module.config()    
    servicesApp.provider('routeResolver', routeResolver);
});
