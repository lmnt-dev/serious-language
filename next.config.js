const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/flashcards/",
        permanent: false,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
