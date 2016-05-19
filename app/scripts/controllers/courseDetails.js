'use strict';

/**
 * @ngdoc function
 * @name 3TttApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the 3TttApp
 */
angular.module('3TttApp')
  .controller('courseDetails', function ($scope, $http) {


  	$scope.studentList = 0;
  	$scope.listOfEnrolledStudents = function(count){
  	$scope.studentList +=count;
  	};

  	$http.get('scripts/controllers/courseDetailsResponse.json').success(function(response){
  $scope.CourseDetailsjson = response;
  console.log('$scope.CourseDetailsjson',$scope.CourseDetailsjson );
}).error(function(error){
  console.log("error", error);
});

  });
