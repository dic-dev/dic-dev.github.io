const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/test/page/:page*",
  //       destination: "/test*&page=:page",
  //     },
  //   ];
  // },
  // output: "export",
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  // experimental: {
  //   serverActions: true,
  // },
}

module.exports = withContentlayer(nextConfig)
