/** @type {import('next').NextConfig} */
const nextConfig = {
    // Build configuration for better error handling
    typescript: {
      ignoreBuildErrors: false,
    },
    eslint: {
      ignoreDuringBuilds: false,
    },
    
    // Performance optimizations
    swcMinify: true,
    compress: true,
    poweredByHeader: false,
    
    // Experimental features for better performance
    experimental: {
      scrollRestoration: true,
    },
    
    // Environment variable validation
    env: {
      NEXT_PUBLIC_BACKEND_BASE_URL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
      NEXT_PUBLIC_Site_URL: process.env.NEXT_PUBLIC_Site_URL,
    },
    
    // Build fallback for missing environment variables
    generateBuildId: async () => {
      // Warn about missing environment variables during build
      if (!process.env.NEXT_PUBLIC_BACKEND_BASE_URL) {
        console.warn('⚠️  NEXT_PUBLIC_BACKEND_BASE_URL is not set. API calls will use fallback data.');
      }
      return 'build-' + Date.now();
    },
    
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