/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  distDir: "build",
  sassOptions: { includePaths: [path.join(__dirname, "styles")] },
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "picsum.photos",
      "pbs.twimg.com",
    ],
  },
};

module.exports = nextConfig;
