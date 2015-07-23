module.exports = {
  entry: "./src/main.js",
  output: {
    path: "./build",
    filename: "script.js"
  },
  module: {
    loaders: [
      {
        test: /\.jade$/,
        loader: "jade"
      },
      {
        test: /\.less$/,
        loader: "style!css!autoprefixer?browsers=last 2 versions!less"
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  devtool: "#source-map"
}
