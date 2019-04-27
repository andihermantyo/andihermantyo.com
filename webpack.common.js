module.exports = {
	module: {
		rules: [
			{
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
                test: /\.js$/
			},
			{
                exclude: /node_modules/,
				loader: 'babel-loader',
				test: /\.js$/
			}
		]
	},
	output: {
		filename: '[name].bundle.js'
	}
};
