module.exports = {
  dev: {
    entry: './app/App.js',
    output: {
      filename: 'public/bundle.js'
    },
    resolve: {
      modulesDirectories: ['./node_modules'],
      extensions: ['', '.js']
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
      modules: false,
      reasons: false
    },
    progress: false,
    keepalive: false
  }
};
