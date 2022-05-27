module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'next/core-web-vitals',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
	rules: {
		// "react/react-in-jsx-scope": 0,
		// "react/prefer-stateless-function": 0,
		// "react/jsx-filename-extension": 0,
		// "react/jsx-one-expression-per-line": 0,
		// "no-nested-ternary": 0
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				trailingComma: 'all',
			},
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.jsx', '.tsx'],
			},
		],
		'react/prop-types': [
			1,
			{
				ignore: ['context', 'tracking'],
			},
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
	globals: {
		React: 'writable',
	},
}
