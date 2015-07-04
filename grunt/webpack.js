module.exports = {
  dev: {
    entry: './app/App.js',
    output: {
      filename: 'public/bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
        }
      ]
    },
    stats: {
      colors: true,
      modules: true,
      reasons: true
    },
    progress: true,
    keepalive: true
  }
};
