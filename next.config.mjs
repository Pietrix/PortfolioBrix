/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{GRAPHQL_ENDPOINT: "https://portfolio.pieterswebsite.nl/graphql"},
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
