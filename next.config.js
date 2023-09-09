const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  // experimental: {
  //   serverActions: true,
  // },
}

module.exports = withContentlayer(nextConfig)
