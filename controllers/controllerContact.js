const { Contact } = require('../models/association');

exports.createContact = async (req, res)=>{

    const { nom,  mail, tel, residence, message } = req.body;
  
    try {
        // Création du service dans la base de données
     const contact = await Contact.create({
      nom,
      mail,
      tel,
      residence,
      message
      
    })
    res.status(201).json(contact);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({
          error: "Une erreur est survenue lors de la création du service",
        });
    
}

}