const path = require('path');

module.exports = {
  entry: './app.module.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'bundle'),
  },
};