module.exports = (Sequelize, sequelize) => {
    return sequelize.define('dayTasks', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        from: {type: Sequelize.STRING},
        to: {type: Sequelize.STRING},
        task: {type: Sequelize.STRING}
    });
};
