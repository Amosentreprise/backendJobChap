const multer = require("multer");

const MINE_TYPES = {
  'image/jpg' : 'jpg',
  'image/jpeg' : 'jpg',
  'image/png' : 'png',
}

// Configuration de Multer pour gérer le téléchargement des images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images"); // Le répertoire où les images seront stockées
  },
  filename: (req, file, cb) => {
    const name = file.originalname.split('').join('_');
    const extension = MINE_TYPES[file.mimetype];
    cb(null, name + Date.now() + "." + extension);
  },
});

// Middleware pour la gestion du téléchargement des images
const upload = multer({ storage: storage }).single('image');

module.exports = upload;
