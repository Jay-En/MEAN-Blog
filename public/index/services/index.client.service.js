angular.module('index').factory('Index', ['$resource',
	function($resource) {
		return $resource('api/articles/:articleId', {
			articleId: '@_id'
			}, {
				update: {
				method: 'PUT'
				}
	});
}]);