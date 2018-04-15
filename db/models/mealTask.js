module.exports = (Sequelize, sequelize) => {
    return sequelize.define('mealTasks', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        time: {type: Sequelize.STRING},
        task: {type: Sequelize.STRING}
    });
};
