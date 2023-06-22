const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("jobChapdb", "root", "", {
  host: "localhost",
  dialect: "mariadb",
});

module.exports = sequelize;
