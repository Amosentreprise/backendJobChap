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
  mail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ville: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quartier: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



module.exports = Prestataire;
