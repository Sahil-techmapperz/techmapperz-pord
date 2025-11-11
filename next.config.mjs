/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['ik.imagekit.io', 'localhost', 'newadmin.techmapperz.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ik.imagekit.io',
            pathname: '/**',  // Allows any path after the domain
          },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3001',
            pathname: '/uploads/**',  // Allow uploads from localhost:3001
          },
          {
            protocol: 'https',
            hostname: 'newadmin.techmapperz.com',
            pathname: '/**',  // Allow all paths from admin domain
          },
        ],
      },
};

export default nextConfig;