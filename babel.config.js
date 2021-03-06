module.exports = {
	"presets": [
		[
			"next/babel",
		]
	],
	"plugins": [
		[
			"babel-plugin-root-import"
		],
		[
			"styled-components",
			{
				"ssr": true,
				"displayName": true,
				"preprocess": false
			}
		],
		[
			"macros"
		],
	]
}
