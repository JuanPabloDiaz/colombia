/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    domains: ['flagcdn.com'],
  },
	// images: {
  //   remotePatterns: [
  //     {
  //       hostname: "flagcdn.com",
  //       protocol: "https",
  //     },
  //   ],
}

module.exports = nextConfig
