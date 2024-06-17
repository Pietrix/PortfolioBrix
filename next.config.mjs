/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{GRAPHQL_ENDPOINT: "http://portfolio.pieterswebsite.nl/graphql"},
    images: { unoptimized: true,    
        remotePatterns: [
        {
          protocol: "http",
          hostname: "**",
        },
      ],
    }, 
    
};
export default nextConfig;
