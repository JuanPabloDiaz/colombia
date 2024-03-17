/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apicolombiastorage.blob.core.windows.net",
      },
      { protocol: "https", hostname: "flagcdn.com" },
      { protocol: "https", hostname: "es.wikipedia.org" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

module.exports = nextConfig;
