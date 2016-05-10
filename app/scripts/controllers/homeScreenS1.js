'use strict';



angular.module('3TttApp')
.controller('homeScreen',function($scope, $http) {
	$scope.imageSource='images/homeScreenImage.png';
  $scope.enteredSearchValue='';


	$http.get('scripts/controllers/test.json').success( function(response) {
      $scope.searchCourseDetails = response; 
      console.log('$scope.searchCourseDetails',$scope.searchCourseDetails);
   	}).error(function(error){
   		console.log("error", error);
   	});
	

  $scope.results =[];

  $scope.fundSearchValue = function(enteredSearchValue){
  	angular.forEach($scope.searchCourseDetails.SerialNumbers, function(value, key) {
  		if(key === enteredSearchValue){
  			$scope.results.push({serial: key, owner: value[0].Owner});
  		}
  	});
};

$scope.CourseImage='images/javaCourseImage.jpg';

$http.get('scripts/controllers/courseDetailsResponse.json').success(function(response){
  $scope.CourseDetailsjson = response;
  console.log('$scope.CourseDetailsjson',$scope.CourseDetailsjson );
}).error(function(error){
  console.log("error", error);
});

$scope.alertFun = function(){
  window.location = "#/about";
  // $location.path = "/about";
};

// $scope.aleFun = function(){
// alert("udhcisv");
// };

});


