import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "default", // Utilise le loader par défaut de Next.js
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Autorise toutes les URLs https
      },
      {
        protocol: "http",
        hostname: "**", // Autorise toutes les URLs http
      },
    ],
  },
};

export default nextConfig;
