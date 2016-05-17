'use strict';

/**
 * @ngdoc function
 * @name 3TttApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the 3TttApp
 */
angular.module('3TttApp')
  .controller('courseDetails', function ($scope) {


  	$scope.studentList = 0;
  	$scope.listOfEnrolledStudents = function(count){
  	$scope.studentList +=count;
  	};

  });
