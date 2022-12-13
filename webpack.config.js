export const webpack = ({ config, mode, target }) => {
	// Add support for a new file type.
	config.module.rules.push(
		{
			test: /\.pdf$/,
			use: ["file-loader"],
		},
		{
			test: /\.node$/,
			use: ["node-loader"],
		}
	);
};
