/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // ✅ disables default Image Optimization
  },
};

module.exports = nextConfig; // ✅ use CommonJS export
