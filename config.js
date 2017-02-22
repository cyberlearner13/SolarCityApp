const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
	mongodbUri: 'mongodb://127.0.0.1:27017/test',
	port: env.PORT || 8080,
	host: env.HOST || '127.0.0.1',
	get serverUrl() {
		return `http://${this.host}:${this.port}`;
	}
};