const config = require('config');
const {user, shedule, dayTask, mealTask, trainingTask, event} = require('./models/index');
module.exports =  ({Sequelize}) => {
  const sequelize = new Sequelize(config.db.name, config.db.user, config.db.pass, config.db.options);

    const Users = user(Sequelize,sequelize);
    const Shedules = shedule(Sequelize,sequelize);
    const DayTasks = dayTask(Sequelize,sequelize);
    const MealTasks = mealTask(Sequelize,sequelize);
    const TrainingTasks = trainingTask(Sequelize,sequelize);
    const Events = event(Sequelize,sequelize);

    Users.hasMany(Shedules, {foreignKey:'userId'});
    Shedules.belongsTo(Users, {foreignKey:'userId'});

    Users.hasMany(Events, {foreignKey:'userId'});
    Events.belongsTo(Users, {foreignKey:'userId'});

    Shedules.hasMany(DayTasks, {foreignKey:'sheduleId'});
    DayTasks.belongsTo(Shedules, {foreignKey:'sheduleId'});

    Shedules.hasMany(MealTasks, {foreignKey:'sheduleId'});
    MealTasks.belongsTo(Shedules, {foreignKey:'sheduleId'});

    Shedules.hasMany(TrainingTasks, {foreignKey:'sheduleId'});
    TrainingTasks.belongsTo(Shedules, {foreignKey:'sheduleId'});

  return {
    Users,
    Shedules,
    DayTasks,
    MealTasks,
    TrainingTasks,
    Events,
    sequelize,
    Sequelize
  };
};
