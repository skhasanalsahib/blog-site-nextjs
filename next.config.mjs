/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL("https://placehold.co/**"),
      new URL("https://images.pexels.com/photos/**"),
    ],
  },
};

export default nextConfig;
