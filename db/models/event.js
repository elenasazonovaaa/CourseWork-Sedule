module.exports = (Sequelize, sequelize) => {
    return sequelize.define('events', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {type: Sequelize.STRING},
        comment: {type: Sequelize.STRING},
        date: {type: Sequelize.DOUBLE},
        repeat: {type: Sequelize.ENUM('Daily','Monthly','Yearly','Unrepeatable')}
    });
};
