const withCSS = require('@zeit/next-css');
const Dotenv = require('dotenv-webpack');
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages(
  withCSS({
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.plugins.push(new Dotenv({ silent: true }));
      return config;
    },
  })
);
