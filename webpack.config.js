const path = require('path')

module.exports = {
  // 最初に読み込むファイル
  entry: './src/index.tsx',
  // webpackでTSをビルドするにはts-loaderを用いる
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 変換対象 ?でtsとtsx両方を対象にしている
        use: 'ts-loader',
        exclude: /node_modules/, // 除外対象を正規表現で記載
      },
    ]},
    resolve: {
      extensions: ['.js', '.ts', '.tsx'], // 外部ファイルやライブラリとして使うファイルの拡張子を指定
    // 出力するファイル
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      publicPath: 'dist/',
    },
    devServer: {
      hot: true, // ファイル変更時に自動的にブラウザ反映
      open: true, // 起動時にブラウザを開く
    }
  }
}