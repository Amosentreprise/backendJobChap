
const { Demande, Service } = require('../models/association')

// Enregistrer une demande
exports.saveDemande =  async (req, res) => {
  try {
    const { nom, prenom, location, date, time, tel, travaux, message } = req.body;
    const { demandeId} = req.params

  

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
      ServiceServiceId: demandeId,
    });

    res.status(201).json(demande);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de l\'enregistrement de la demande.' });
  }
}

//voir toutes les demandes

exports.getAllDemandes = async (req, res) => {

  try {
    const demande = await Demande.findAll(
    
    )
  } catch (error) {
    
  }
}
