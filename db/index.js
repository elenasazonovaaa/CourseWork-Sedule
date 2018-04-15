const config = require('config');

module.exports =  ({Sequelize}) => {
  const sequelize = new Sequelize(config.db.name, config.db.user, config.db.pass, config.db.options);

  return {
    sequelize,
    Sequelize
  };
};
