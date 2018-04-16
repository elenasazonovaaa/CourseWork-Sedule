module.exports = (Sequelize, sequelize) => {
    return sequelize.define('shedules', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {type: Sequelize.STRING},
        type: {type: Sequelize.ENUM('Day','Meal','Training')},
        isActive: {type: Sequelize.BOOLEAN}
    });
};
