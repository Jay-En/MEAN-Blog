var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
	created: {
		type: Date,
		dafault: Date.Now
	},
	title: {
		type: String,
		trim: true,
		required: 'Title cannot be blank'
	},
	category: {
		type: String,
		trim: true,
		required: 'Category cannot be blank'
	},
	tags: {
		type: String,
		trim: true,
		required: 'tags cannot be blank'
	},
	content: {
		type: String,
		default: '',
		trim: true
	},
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	}

});

mongoose.model('Article', ArticleSchema);