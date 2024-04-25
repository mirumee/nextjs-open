/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.nyc.gov',
      },
    ]
  },
  redirects: async () => {
    return [
      {
        source: "/config/redirect",
        destination: "/config/redirect-destination",
        permanent: true,
      },
      {
        source: "/config/redirect",
        destination: "/config/redirect-destination",
        permanent: true,
      }
    ];
  },
  rewrites: async () => {
    return [
      {
        source: "/config/rewrite",
        destination: "/config/rewrite-destination",
      }
    ];
  }
};

export default nextConfig;
