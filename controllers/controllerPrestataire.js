const { Prestataire } = require("../models/association");
const bcrypt = require("bcrypt");

//generer un token pour chaque utilisateur afin de garder l'utilisateur connecter
const jwt = require("jsonwebtoken");

const JWT_SIGN_SECRET = "ACHJHGKREOGOUTYOPSEAGJJBKHKDRTLO";
function generateToken(prestataire) {
  const token = jwt.sign({ prestataireId: prestataire }, JWT_SIGN_SECRET, {
    expiresIn: "1h",
  });
  return token;
}

exports.inscriptionPrestataire = async (req, res) => {
  const { nom, prenom, mail, tel, password, ville, quartier } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const prestataire = await Prestataire.create({
      password: hashedPassword,
      nom,
      prenom,
      mail,
      tel,
      ville,
      quartier,
    });

    res.status(201).json({ message: "Inscription réussie" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Une erreur est survenue lors de l'inscription" });
  }
};
exports.connexionPrestataire = async (req, res) => {
  const { mail, password } = req.body;

  try {
    const prestataire = await Prestataire.findOne({
      where: { mail: mail },
    });

    //verification du mot de passe
    const match = await bcrypt.compare(password, prestataire.password);

    if (match) {
      const token = generateToken(prestataire.prestataireId);
      return res.status(200).json({
        token,
      });
    }

    // Si aucun utilisateur n'a été trouvé avec ce numéro de téléphone et ce mot de passe, renvoyer une erreur
    return res
      .status(400)
      .json({ message: "Numéro de téléphone ou mot de passe incorrect" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.getProfilPrestataire = async (req, res) => {
  const userOnline = req.prestataireId;
  try {
    const infoUser = await Prestataire.findOne({
      where: { prestataireId: userOnline },
    });

    if (!infoUser) {
      return res
        .status(404)
        .json({
          message: "Vous n'etes pas autorisé à acceder à cette ressource",
        });
    }
    

    return res.status(200).json( infoUser );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.EditProfilPrestataire = async (req, res) => {
  const { nom, prenom, mail, tel, password, ville, quartier } = req.body;
  const imagePath = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
  try {
    const prestataire = await Prestataire.findOne({
      where: { prestataireId: req.prestataireId },
    });

    await prestataire.update({
      nom,
      prenom,
      mail,
      tel,
      password,
      ville,
      quartier,
      image:imagePath
    });
    return res
      .status(200)
      .json({ message: "Mise à jour effectuée avec succes" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};
exports.changePasswordPrestataire = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  try {
    // Trouver l'utilisateur dans la base de données
    const prestataire = await Prestataire.findOne({
      where: { prestataireId: req.prestataireId },
    });

    // Vérifier que l'ancien mot de passe correspond à celui dans la base de données
    const match = await bcrypt.compare(oldPassword, prestataire.password);
    if (!match) {
      return res.status(400).json({ message: "Ancien mot de passe incorrect" });
    }
    // Chiffrer le nouveau mot de passe
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Mettre à jour le mot de passe dans la base de données
    await Prestataire.update(
      { password: hashedPassword },
      { where: { prestataireId: req.prestataireId } }
    );
    res.status(200).json({ message: "Mot de passe modifié avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
