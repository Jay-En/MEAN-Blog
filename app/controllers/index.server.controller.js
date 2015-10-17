
exports.render = function(req, res) {
	  console.log(JSON.stringify(req.user));
	res.render('index', {
		title: 'MEAN BLOG',
		user: JSON.stringify(req.user)
	});
};