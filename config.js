const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
	mongodbUri: 'mongodb://admin:admin@ds161059.mlab.com:61059/solarcity',
	port: env.PORT || 8080,
	host: env.HOST || '127.0.0.1',
	get serverUrl() {
		return `http://${this.host}:${this.port}`;
	}
};