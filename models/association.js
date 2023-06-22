const sequelize = require('../config/database')

const Demande = require("./Demande");
const Prestataire = require("./Prestataire");
const Service = require("./Service");

//les associations

Demande.belongsTo(Service);
Service.hasMany(Demande);

Prestataire.hasMany(Service);
Service.belongsTo(Prestataire);

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Tous les modèles ont été synchronisés");
  })
  .catch((error) => {
    console.error("Erreur lors de la synchronisation des modèles :", error);
  });

module.exports = {
    Demande,
    Service,
    Prestataire
}