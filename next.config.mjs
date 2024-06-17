/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{GRAPHQL_ENDPOINT: "http://portfolio.pieterswebsite.nl/graphql"},
    images: { unoptimized: true, },
    
};

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'portfolio.pieterswebsite.nl',
          port: '',
          pathname: '/wp-content/uploads/**',
        },
      ],
    },
  }
  

export default nextConfig;
