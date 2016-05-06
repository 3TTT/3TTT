'use strict';


// angular.module('testApp')
// .controller('MainCtrl', function($scope){

//     $scope.firstName="ASASAS";
//     $scope.lastName="deep";
//     });


// angular.module('testApp')
// .controller('nameslist', function($scope){
//     $scope.names=[
//         {name1:'satish', job:'frientEnddeveloper'},
//         {name1:'Raju', job:'frientEnddeveloper'},
//         {name1:'Ramesh', job:'developer'},
//         {name1:'amar', job:'tester'},

//     ]
// });


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


});


