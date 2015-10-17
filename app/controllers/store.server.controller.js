var Store = require('mongoose').model('Store');

exports.create = function(req, res, next){

	var store = new Store(req.body);

	store.save(function(err){
		if(err)	{
			return next(err);
		} else
		{
			res.json(req.body);
		}
	});
};

exports.list = function(req, res, next){
	Store.find().populate('user').exec(function(err,stores){
		if(err){
			return next(err);
		}else
		{
			res.json(stores)
		}
	})

};



