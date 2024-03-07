/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['maristanweb.blob.core.windows.net'],
		minimumCacheTTL: 31536000,
	},
};

module.exports = nextConfig;
