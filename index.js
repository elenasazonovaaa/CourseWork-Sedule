const di  = require('./loader');
const app = require('./server');
const config = require('config');

(async function () {
  const container = di();
  const server = await app(container);

  server.listen(config.app.port, () => console.log(`Server running on port : ${config.app.port}`));
})();