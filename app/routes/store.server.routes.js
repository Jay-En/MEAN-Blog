var store = require('../../app/controllers/store.server.controller'),
	 users = require('../../app/controllers/users.server.controller');

module.exports = function(app){
	app.route('/store')
	.post(users.requiresLogin, store.create)
	.get(store.list);
}