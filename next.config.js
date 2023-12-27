/** @type {import('next').NextConfig} *//** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["image.tmdb.org", "rb.gy", "images.unsplash.com"],
	},
	env: {
		REACT_APP_TMDB_API_KEY: process.env.REACT_APP_TMDB_API_KEY,
		REACT_APP_TMDB_API_URL: process.env.REACT_APP_TMDB_API_URL,
		REACT_APP_STRIPE_SECRET_KEY: process.env.REACT_APP_STRIPE_SECRET_KEY,
		REACT_APP_STRIPE_PUBLIC_KEY: process.env.REACT_APP_STRIPE_PUBLIC_KEY,
	},
};

module.exports = nextConfig;