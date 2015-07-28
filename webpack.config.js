module.exports = {
  entry: "./main.js",
  output: {
    filename: "./build/[name].js"
  },
  module: {
    loaders: [
      { test: /\.jade$/, loader: "jade" },
      { test: /\.less$/,  loader: "style!css!less" },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=build/img/[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      }
    ]
  },
  devtool: "#source-map"
}
