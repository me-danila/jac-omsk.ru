import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @todo    удалить эту тему в будущем
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

export default nextConfig;
