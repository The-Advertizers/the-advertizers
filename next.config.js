module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.resolve.extensions = ['', '.js', '.jsx'];
      return config
    },
  }