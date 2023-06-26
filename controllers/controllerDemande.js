
const { Demande } = require('../models/association')

// Enregistrer une demande
exports.saveDemande =  async (req, res) => {
  try {
    const { nom, prenom, location, date, time, tel, travaux, message, serviceId } = req.body;

    // Vérifier si le service existe
    const service = await service.findByPk(serviceId);
    if (!service) {
      return res.status(404).json({ error: 'Le service demandé n\'existe pas.' });
    }

    // Créer la demande
    const demande = await Demande.create({
      nom,
      prenom,
      location,
      date,
      time,
      tel,
      travaux,
      message,
      ServiceId: serviceId,
    });

    res.status(201).json(demande);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de l\'enregistrement de la demande.' });
  }
}

//voir toutes les demandes

exports.getAllDemandes = async (req, res) => {
  
}
