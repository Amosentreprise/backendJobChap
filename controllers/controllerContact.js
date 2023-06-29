const { Contact } = require('../models/association');
const nodemailer =  require("nodemailer");

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
    // const tranport = nodemailer.createTransport({
    //   service:"Gmail",
    //   auth:{
    //     user:"jobchapr@gmail.com",
    //     pass:"Amos2003"
    //   }
    // });
    // await tranport.sendMail({
    //   from:mail,
    //   to:"jobchapr@gmail.com",
    //   subject:"No",
    //   text:"bonjour"
    // })
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