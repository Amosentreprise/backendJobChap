const { Service } = require("../models/association");


// Middleware pour la création d'un service avec une image
exports.createService = (req, res) => {
  const { title, description, price } = req.body;
  const image = req.file.filename;

  // Création du service dans la base de données
  Service.create({
    title,
    description,
    price,
    image,
  })
    .then((service) => {
      res.status(201).json(service);
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .json({
          error: "Une erreur est survenue lors de la création du service",
        });
    });
};

// Modifier un service
exports.putService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price } = req.body;

    // Vérifier si le service existe
    const service = await Service.findByPk(id);
    if (!service) {
      return res
        .status(404)
        .json({ error: "Le service demandé n'existe pas." });
    }

    // Mettre à jour le service
    await service.update({
      title,
      description,
      price,
    });

    res.json(service);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        error: "Une erreur est survenue lors de la modification du service.",
      });
  }
}

// Supprimer un service
exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    // Vérifier si le service existe
    const service = await Service.findByPk(id);
    if (!service) {
      return res
        .status(404)
        .json({ error: "Le service demandé n'existe pas." });
    }

    // Supprimer le service
    await service.destroy();

    res.json({ message: "Le service a été supprimé avec succès." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        error: "Une erreur est survenue lors de la suppression du service.",
      });
  }
}

// Afficher tous les services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.json(services);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        error: "Une erreur est survenue lors de la récupération des services.",
      });
  }
}



