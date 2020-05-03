const withCSS = require("@zeit/next-css");
const Dotenv = require("dotenv-webpack");

module.exports = withCSS({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
});
