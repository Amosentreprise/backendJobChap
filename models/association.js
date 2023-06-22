const Demande = require("./Demande");
const Prestataire = require("./Prestataire");
const Service = require("./Service");

//les associations

Demande.belongsTo(Service);
Service.hasMany(Demande);

Prestataire.hasMany(Service);
Service.belongsTo(Prestataire);

module.exports = {
    Demande,
    Service,
    Prestataire
}