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
        source: "/next-config-redirect-missing",
        destination: "/config-redirect?missing=true",
        permanent: true,
        missing: [{ type: "cookie", key: "missing-cookie" }],
      }
    ];
  }
};

export default nextConfig;
