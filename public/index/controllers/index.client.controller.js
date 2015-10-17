angular.module('index')
.controller('IndexController', ['$scope', '$routeParams', '$location', 'Authentication', 'Articles', 'ngProgressLite', function($scope, $routeParams, $location, Authentication, Articles, ngProgressLite)
{
	$scope.authentication = Authentication;

	$scope.startProgress = function() {
		ngProgressLite.start();
	}

	$scope.stopProgress = function() {
		ngProgressLite.done();
	}

	$scope.create = function() {
	var article = new Articles({
		title: this.title,
		content: this.content
		});

	article.$save(function(response) {
		$location.path('articles/' + response._id);
			}, function(errorResponse) {
			$scope.error = errorResponse.data.message;	
		});
	};

	$scope.find = function() {

	  		ngProgressLite.start();
			$scope.articles = Articles.query(function(){
	    		ngProgressLite.done();
	  		});
			};
	$scope.findOne = function() {

	  		ngProgressLite.start();
			$scope.article = Articles.get({
			articleId: $routeParams.articleId
		},function(){
	    		ngProgressLite.done();
	  		});
	};


	$scope.update = function() {
		$scope.article.$update(function() {
			$location.path('articles/' + $scope.article._id);
	    		ngProgressLite.done();
				}, function(errorResponse) {
					$scope.error = errorResponse.data.message;	
	    		ngProgressLite.done();
		});
	};

	$scope.delete = function(article) {
	  	ngProgressLite.start();
		if (article) {
			article.$remove(function() {
				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {	
						$scope.articles.splice(i, 1);
						}
					}
					});
					} else {
						$scope.article.$remove(function() {
						$location.path('articles');
						});
						}

			ngProgressLite.done();
					};


	$scope.userFullName = function(){
			if(Authentication.user)
			{
				return Authentication.user.fullName;
			}
			else
			{
				return 'Guest';
			}
	}



	$scope.loadDropDown = function(type){
		$scope.loading = true;
		if(type="user")
		{
			if(Authentication.user)
				{
					$scope.userItem = {
						'1' : {
						'name' : 'Profile',
						'href' : "#"
						},
						'2' : {
						'name' : 'Sign out',
						'href' : '/signout',
						}
						
					};
				}
				else
				{
					$scope.userItem = {
						'1' : {
						'name' : 'Sign in',
						'href' : '/signin'
						},
						'2' : {
						'name' : 'Sign up',
						'href' : '/signup'
						}
						
					};

				}
		}
		if (type="blog")
		{
			if(Authentication.user)
			{

				$scope.blogItem = {
							'1' : {
							'name' : 'List Articles',
							'href' : '/#!/articles',
							'class': 'glyphicon glyphicon-list'
						},
							'2' : {
							'name' : 'Create Article',
							'href' : '/#!/articles/create',
							'class': 'glyphicon glyphicon-pencil'
						}
				};
			}
			else
			{
				$scope.blogItem = {
							'1' : {
							'name' : 'List Articles',
							'href' : '/#!/articles',
							'class': 'glyphicon glyphicon-list'
						}
				};
			}
		}
		
	};
   


		}

]);




