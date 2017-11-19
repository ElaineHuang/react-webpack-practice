const ip = require('ip');

// ip address for development server.
const devServerIP = ip.address();

// port for development server.
const devServerPort = 8080;

module.exports = {
  devServerIP,
  devServerPort,
  devServerAddress: `http://${devServerIP}:${devServerPort}`,
};
