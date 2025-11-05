/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repository is NOT named 'username.github.io', uncomment and set the basePath:
  // basePath: '/your-repo-name',
  // trailingSlash: true,
};

module.exports = nextConfig;
