define(function() {
  var app = angular.module('tqlApp', ['ngRoute', 'routeResolverServices']);
  app.register = app;

  return app;
});