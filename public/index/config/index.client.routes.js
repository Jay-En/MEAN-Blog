angular.module('index').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'index/views/index.client.view.html'
				}).
			when('/about', {
				templateUrl: 'index/views/about.client.view.html'
				}).
			when('/contacts', {
				templateUrl: 'index/views/contacts.client.view.html'
				}).
			otherwise({
				redirectTo: '/'
				});
			}
]);

