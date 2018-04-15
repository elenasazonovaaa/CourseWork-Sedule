const users = require('../data/users.json');
const shedules = require('../data/shedules.json');
const trainingTasks = require('../data/trainingTasks.json');

module.exports = async (db) =>{
    const UsersDb = await db['Users'].bulkCreate(users);
    const ShedulesDb = await db['Shedules'].bulkCreate(shedules);
    const TrainingTasksDb = await db['TrainingTasks'].bulkCreate(trainingTasks);
    await UsersDb[0].addShedules(ShedulesDb[0]);
    await ShedulesDb[0].addTrainingTasks([TrainingTasksDb[0],TrainingTasksDb[1]]);
};