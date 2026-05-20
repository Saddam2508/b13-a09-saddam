import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kajariaceramics.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.daisyui.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "demo.curlythemes.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "pitchbooking.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "pixabay.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
