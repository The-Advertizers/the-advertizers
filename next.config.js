module.exports = {
  webpack: (config) => {
    config.resolve.extensions = ['', '.js', '.jsx'];
    return config
  },
}