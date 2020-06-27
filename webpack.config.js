const path = require('path');
const EndWebpackPlugin = require('./EndWebpackPlugin');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new EndWebpackPlugin(() => {
      console.log('Succeed!');
    }, () => {
      console.log('Failed!');
    })
  ]
};
