const express = require('express');
const bodyParser = require('body-parser');
const tempData = require('./helpers/tempData.helper');

module.exports = async (container) => {
  await container.resolve('context').sequelize.sync({force: true});
  //await tempData(container.resolve('context'));

  const app = express();

  app.use(bodyParser.json());

  app.use('/api',
    container.resolve('loggerGlobal'),
    container.resolve('apiController'),
    container.resolve('errorGlobal')
  );

  return app;
};
