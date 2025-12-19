import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/devicons/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.keycloak.org",
      },
      {
        protocol: "https",
        hostname: "versatile.id",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "www.asia.edu.tw",
      },
      {
        protocol: "https",
        hostname: "react-hook-form.com",
      },
      {
        protocol: "https",
        hostname: "tanstack.com",
      },
      {
        protocol: "https",
        hostname: "zod.dev",
      },
      {
        protocol: "https",
        hostname: "xellar.co",
      },
      {
        protocol: "https",
        hostname: "www.chartjs.org",
      },
      {
        protocol: "https",
        hostname: "thirdweb.com",
      },
    ],
  },
};

export default nextConfig;
