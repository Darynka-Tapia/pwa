module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,png,json,js,txt}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};