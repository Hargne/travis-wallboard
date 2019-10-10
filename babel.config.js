module.exports = (api) => {
	api.cache(true);

	const presets = [
		'@babel/preset-react',
		'@babel/preset-env',
	];
	const plugins = [
		['@babel/plugin-proposal-decorators', { legacy: true }],
		['@babel/plugin-proposal-class-properties', { loose: true }],
	];

	return {
		presets,
		plugins,
	};
};
