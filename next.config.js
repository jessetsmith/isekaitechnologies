/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // If your repository is NOT named 'username.github.io', uncomment and set the basePath:
  // Example: basePath: "/isekai-technologies-nextjs",
  // Remember to include the (/) at beginning of the path.
};

module.exports = nextConfig;
