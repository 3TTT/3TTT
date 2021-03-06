'use strict';

/**
 * @ngdoc overview
 * @name 3TttApp
 * @description
 * # 3TttApp
 *
 * Main module of the application.
 */
angular
  .module('3TttApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/homeScreenS1',{
        templateUrl: 'views/homeScreenS1.html',
        controller: 'homeScreen',
        controllerAs:'homeScreenS1'
      })
      .when('/courseDetails',{
        templateUrl:'views/courseDetails.html',
        controller:'courseDetails',
        controllerAs:'courseDetails'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
