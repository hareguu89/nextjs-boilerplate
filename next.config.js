/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
	},
	// experimental: {
	// 	forceSwcTransforms: true,
	// },
	compiler: {
		styledComponents: { "fileName": true, "displayName": true, "pure": true }
	}
}

module.exports = nextConfig
