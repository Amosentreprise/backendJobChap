
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Demande = sequelize.define("Demande", {
  demandeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



module.exports = Demande;
