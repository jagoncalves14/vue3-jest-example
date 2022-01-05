const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	'plugins': [
		new StyleLintPlugin({
			'files': ['**/*.{html,vue,css,sass,scss}'],
			'fix': false,
			'cache': true,
			'emitErrors': true,
			'failOnError': false
		})
	]
};
