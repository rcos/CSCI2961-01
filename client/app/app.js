'use strict';

angular.module('itosApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider) {
    var site_prefix = '/CSCI2961-01';
    $routeProvider
      .otherwise({
        redirectTo: site_prefix+'/?content=about'
      });

    $locationProvider.html5Mode(true);
  });
