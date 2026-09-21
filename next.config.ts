import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Allow phone/tablet access over local Wi‑Fi during development.
  allowedDevOrigins: ["172.28.209.55", "172.26.91.182", "172.26.92.37", "172.28.230.137"],
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
