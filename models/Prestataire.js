// prestataire.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Prestataire = sequelize.define("Prestataire", {
  prestataireId: {
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



module.exports = Prestataire;
