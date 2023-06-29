const { Service } = require("../models/association");


// Middleware pour la création d'un service avec une image
exports.createService = async (req, res) => {
  const { title,  price, vilserv, description } = req.body;
 
  
try {
  const imagePath = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
 
    // Création du service dans la base de données
 const service = await Service.create({
  title,
  price,
  vilserv,
  description,
  image:imagePath,
  PrestatairePrestataireId	: req.prestataireId
})
res.status(201).json(service);
} catch (error) {
  console.error(error);
  res
    .status(500)
    .json({
      error: "Une erreur est survenue lors de la création du service",
    });
}

};

// Modifier un service
exports.putService = async (req, res) => {
  
    const { serviceId } = req.params;
    const { title,  price, vilserv, description } = req.body;
    const imagePath = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`

    try {
        // Vérifier si le service existe
    const service = await Service.findByPk(serviceId);
    if (!service) {
      return res
        .status(404)
        .json({ error: "Le service demandé n'existe pas." });
    }

    // Mettre à jour le service
    await service.update({
      title,
      price,
      vilserv,
      description,
      image:imagePath,
    });
  return  res.status(201).json({message : "modification avec succes"});
      
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
    const { serviceId } = req.params;

    // Vérifier si le service existe
    const service = await Service.findByPk(serviceId);
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
exports.getService = async (req, res) =>{
 
  const { serviceId } = req.params;
  try {
    const infoService = await Service.findOne({
      where: { serviceId: serviceId },
    });

    if (!infoService) {
      return res
        .status(404)
        .json({
          message: "Vous n'etes pas autorisé à acceder à cette ressource",
        });
    }
    

    return res.status(200).json( infoService );
  } catch (error) {
    console.log(error);
    return res.status(500).json({message : "probleme"})
  }
    
}
// Afficher tous les services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.status(200).json(services);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        error: "Une erreur est survenue lors de la récupération des services.",
      });
  }
}
exports.getServiceForUser = async (req, res) =>{
  try {
    const services = await Service.findAll({
      where:{PrestatairePrestataireId	: req.prestataireId}
    });
    res.status(200).json(services);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        error: "Une erreur est survenue lors de la récupération des services.",
      });
  }
}


