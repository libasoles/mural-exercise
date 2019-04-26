const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

const nextConfig = {
  webpack: config => ({
    ...config,
    node: {
      ...config.node,
      fs: 'empty'
    }
  })
};

module.exports = withPlugins([[withCSS]], nextConfig);
