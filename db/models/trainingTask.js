module.exports = (Sequelize, sequelize) => {
    return sequelize.define('trainingTasks', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        task: {type: Sequelize.STRING},
        sets: {type: Sequelize.INTEGER},
        repeats: {type: Sequelize.INTEGER}
    });
};
