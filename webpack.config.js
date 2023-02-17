export const webpack = ({ config, mode, target }) => {
	// Add support for a new file type.
	config.module.rules.push(
		{
			test: /\.js$|jsx/,
			use: ["babel-loader"],
		},
	);
};
