const path = require('path');
const config = require('./webpack.common');


config.entry = './src/index.js',
config.externals= {
	"paella-core": {
		commonjs: 'paella-core',
		commonjs2: 'paella-core',
		amd: 'paella-core',
		module: 'paella-core'
	},
};

module.exports = [
	{
		...config,
		output: {
			path: path.join(__dirname, "dist"),
			filename: 'paella-template-plugins.js',
			library: 'paella-template-plugins',
			libraryTarget: 'umd'
		}
	},
	{
		...config,
		output: {
			path: path.join(__dirname, "dist"),
			filename: 'paella-template-plugins.es6.js',
			libraryTarget: 'module',
			environment: { module: true },
		},
		experiments: {
			outputModule: true
		}
	}
];