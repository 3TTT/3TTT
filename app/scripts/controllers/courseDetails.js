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
  	// 	if(count<2){
  	// 	$scope.studentList +=count;
  	// }else{
  	// 	console.log("only 6 number per class, please enroll in next call");
  	// 	// <p>only 6 number per class, please enroll in next call<p>
  	// 	$scope.studentList +=count+4;
  	// }

  	$scope.studentList +=count;

  	};
  });
