const bcrypt = require('bcryptjs');
module.exports = (Sequelize, sequelize) => {
    return sequelize.define('users', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        login: {type: Sequelize.STRING},
        password: {type: Sequelize.STRING}
    }, {
        hooks: {
            beforeCreate: (user, options) =>{
                return bcrypt.genSalt(11)
                    .then(function (salt){
                        return bcrypt.hash(user.password, salt);
                    }).then(function (hash){
                        user.password = hash;
                    });
            }
        }
    });
};
