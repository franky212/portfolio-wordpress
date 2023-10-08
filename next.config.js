/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1110286-3894329.cloudwaysapps.com",
      },
    ],
  },
};

module.exports = nextConfig;
