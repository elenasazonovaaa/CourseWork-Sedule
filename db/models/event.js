module.exports = (Sequelize, sequelize) => {
    return sequelize.define('events', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {type: Sequelize.STRING},
        comment: {type: Sequelize.INTEGER},
        date: {type: Sequelize.INTEGER},
        repeat: {type: Sequelize.ENUM('Daily','Monthly','Yearly','Unrepeatable')}
    });
};
