/** @type {import('next').NextConfig} */
const nextConfig = {
    //experimental features
    experimental: {
      appDir: true,
      //external packages
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
    //topLevelAwait
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  
  module.exports = nextConfig
