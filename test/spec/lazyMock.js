define(function() {
  var app = angular.module('tqlApp', ['ngRoute', 'routeResolverServices']);
  app.lazy = app;

  return app;
});