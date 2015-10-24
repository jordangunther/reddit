var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService) {
	$scope.getPosts = function(){
		FirebaseService.getPosts().then(function(res){
			$scope.posts = res;
			console.log(res);
		})
	}

	$scope.addPost = function() {
		FirebaseService.addPost($scope.newPost).then(function(res){
			$scope.getPosts();
		})
	}
	// setInterval(function(){
 //     $scope.getPosts();
 //   }, 1500)
})	