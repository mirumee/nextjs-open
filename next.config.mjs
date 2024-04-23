/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'labs.jensimmons.com',
      },
    ]
  }
};

export default nextConfig;
