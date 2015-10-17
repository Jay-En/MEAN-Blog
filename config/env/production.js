var connection_string = '127.0.0.1:27017/'+process.env.OPENSHIFT_APP_NAME;
// if OPENSHIFT env variables are present, use the available connection info:
if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;
}


module.exports = {
db: 'mongodb://'+connection_string,
sessionSecret: 'developmentSessionSecret',
facebook: {
			clientID: '642569372492164',
			clientSecret: '21fa95f8b7ca17067890ccf5d4a590c2',
			callbackURL: 'http://localhost/oauth/facebook/callback'
			}

};

