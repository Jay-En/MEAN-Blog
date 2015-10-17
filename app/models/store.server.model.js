var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var StoreSchema = new Schema({
 name: {
		 type: String,
		 required: 'Store name is required'
		 },
address: {
		 type: String,
		 required: 'address is required'
		 },
 user: {
		 type: Schema.ObjectId,
		 ref: 'User'
		 }
});


mongoose.model('Store', StoreSchema);