/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
