/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "flagcdn.com",
        protocol: "https",
      },
      {
        hostname: "apicolombiastorage.blob.core.windows.net",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
