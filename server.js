const serverConfig = require('./configs/server-config');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const root = path.resolve(__dirname, 'build');
const routes = require('./routes/index');

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS, HEAD');
  res.header('Access-Control-Allow-Headers', 'content-type');
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.use(bodyParser.json());
routes(app);
app.use(express.static(root));
app.get('*', function(req, res) {
  res.sendfile(path.resolve(root, 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('node development mode now is listening on:');
  console.log(`http://localhost:${serverConfig.nodeServerPort}`);
  console.log(`http://127.0.0.1:${serverConfig.nodeServerPort}`);
  console.log(serverConfig.nodeDevAddress);
});
