import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "img.freepik.com", 
      "randomuser.me", 
      "s3-alpha-sig.figma.com" // Add Figma image CDN domain here
    ],
  },
};

export default nextConfig;
