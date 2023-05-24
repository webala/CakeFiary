/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "firebasestorage.googleapis.com",
            port: "",
            pathname: "/v0/b/cake-fairy-122cf.appspot.com/o/**",
         },
      ],
   },
};

module.exports = nextConfig;
