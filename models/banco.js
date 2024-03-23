const Sequelize = require("sequelize");

const sequelize = new Sequelize("banco1", "root", "", {
    host: "localhost",
    dialect: "mysql"
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};
