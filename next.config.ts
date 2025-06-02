import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.discordapp.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.thewirecutter.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.mscdirect.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images-ext-1.discordapp.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdnimg.webstaurantstore.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.iconfasteners.ie",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images-cdn.ubuy.co.in",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
