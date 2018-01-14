const serverConfig     = require('./configs/server-config');
const express = require('express');
const app = express();
const history = require('express-history-api-fallback');

if (process.env.NODE_DEV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./configs/webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  const root = join(__dirname, 'build');

  app.use(express.static(root));
  app.use(history('index.html', { root }));
}

app.listen(process.env.PORT || 3000, () => {
  console.log('node development mode now is listening on:');
  console.log(`http://localhost:${serverConfig.nodeServerPort}`);
  console.log(`http://127.0.0.1:${serverConfig.nodeServerPort}`);
  console.log(serverConfig.nodeDevAddress);
});
