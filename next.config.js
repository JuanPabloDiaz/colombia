/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "flagcdn.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
